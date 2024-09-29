"use client";
import { useState, useEffect, useMemo } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import Box from "@component/Box";
import Grid from "@component/grid/Grid";
import { Button } from "@component/buttons";
import TextField from "@component/text-field";
import { SearchParams } from "interfaces";
import { geocode, RequestType } from "react-geocode";
import apiKeys from '@utils/__api__/apiKeys';
import apiList from "@utils/__api__/apiList";
import useAxios from "custom/useAxios";
import { tokens } from "@utils/utils";
import { useRouter } from "next/navigation";

// ===========================================================
type AddressFormProps = { searchParams?: SearchParams; address?: any };
// ===========================================================

export default function AddressForm({ searchParams }: AddressFormProps) {
  const searchLocationResponse=localStorage.getItem('searchLocationResponse');
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const router = useRouter();
  const token = tokens();
  
  const [lat, setLat] = useState<string | null>(null);
  const [lng, setLng] = useState<string | null>(null);
  const [address, setAddress] = useState({
    country: null,
    state: null,
    city: null,
    pinCode: null,
  });
  const [label, setLabel] = useState('Home');
  const { response: locationResponse, fetchData: locationFetchData } = useAxios();
  const { response: addressResponse, fetchData: addressFetchData } = useAxios();

  // Define INITIAL_VALUES using useMemo
  const INITIAL_VALUES = useMemo(() => ({
    label,
    receiverName: "",
    phoneAlt: "",
    locality: "",
    nearby: "",
    floorNo: "",
    address: "",
    pinCode: address.pinCode,
    district: address.city,
    state: address.state,
    addressId: "",
    latitude: lat,
    longitude: lng,
    isDefault: true,
  }), [address, lat, lng, label]);

  const VALIDATION_SCHEMA = yup.object().shape({
    receiverName: yup.string().required("Receiver's name is required"),
    address: yup.string().required("Address is required"),
    phoneAlt: yup.string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .min(10, "Mobile number should be 10 digits")
      .max(10, "Mobile number should be 10 digits"),
  });

  const handleFormSubmit = async (values: any) => {
    if (lat && lng) {
      await findNearestStore(lat, lng);
      localStorage.removeItem('cart');
      localStorage.removeItem('locationResponse');
      localStorage.setItem('locationResponse',searchLocationResponse);
      try {
        const datas = {
          label,
          receiverName: values.receiverName,
          phoneAlt: values.phoneAlt,
          locality: "",
          nearby: values.nearby,
          floorNo: values.floorNo,
          address: values.address,
          pinCode: address.pinCode,
          district: address.city,
          state: address.state,
          addressId: "",
          latitude: lat,
          longitude: lng,
          isDefault: true,
        };

        // Call API to add address
        await addressFetchData({
          url: apiList.ADDRESS,
          method: "POST",
          data: datas,
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
        window.location.replace('/');
   
      } catch (error) {
        console.error("Error submitting address:", error);
      }
    }
  };

  const updateLabel = (value: string, setFieldValue: any) => {
    setLabel(value);
    setFieldValue("label", value);
  };

  useEffect(() => {
    if (searchParams.get('lat') && searchParams.get('lng')) {
      const latitude = searchParams.get('lat');
      const longitude = searchParams.get('lng');
      setLat(latitude);
      setLng(longitude);
      localStorage.setItem('lat', latitude);
      localStorage.setItem('lng', longitude);
    } else {
      const storedLat = localStorage.getItem('lat');
      const storedLng = localStorage.getItem('lng');
      if (storedLat && storedLng) {
        setLat(storedLat);
        setLng(storedLng);
      }
    }
  }, [searchParams]);

  const findNearestStore = async (lat: string, lng: string) => {
    try {
      await locationFetchData({ url: `${apiList.NEAREST_STORE}?lat=${lat}&lng=${lng}`, method: "GET" });
    } catch (error) {
      console.error("Error fetching nearest store:", error);
    }
  };

  useEffect(() => {
    if (lat && lng) {
      addByLangLat(lat, lng);
    }
  }, [lat, lng]);

  const addByLangLat = async (lat: string, long: string) => {
    try {
      const { results } = await geocode(RequestType.LATLNG, `${lat},${long}`, {
        key: apiKeys.GOOGLE_API_KEY,
      });
      const { city, state, country, postal_code } = results[0].address_components.reduce((acc, component) => {
        if (component.types.includes("locality")) acc.city = component.long_name;
        else if (component.types.includes("administrative_area_level_1")) acc.state = component.long_name;
        else if (component.types.includes("country")) acc.country = component.long_name;
        else if (component.types.includes("postal_code")) acc.postal_code = component.long_name;
        return acc;
      }, {});
      setAddress({ country, state, city, pinCode: postal_code });
    } catch (error) {
      console.error("Error fetching geocode data:", error);
    }
  };

  return (
    <Formik
      enableReinitialize
      initialValues={INITIAL_VALUES}
      validationSchema={VALIDATION_SCHEMA}
      onSubmit={handleFormSubmit}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
        <form onSubmit={handleSubmit}>
          <Box mb="30px">
            <Grid container horizontal_spacing={10} vertical_spacing={10}>
              {["Home", "Work", "Hotel", "Other"].map((value) => (
                <Grid item md={1} xs={2} key={value}>
                  <button
                    type="button"
                    className={values.label === value ? "btn btn-success btn-sm" : 'btn btn-light btn-sm'}
                    onClick={() => updateLabel(value, setFieldValue)}
                  >
                    {value}
                  </button>
                </Grid>
              ))}
            </Grid>
            <hr />
            <Grid container horizontal_spacing={6} vertical_spacing={4}>
              <Grid item md={6} xs={12}>
                <TextField
                  fullwidth
                  name="receiverName"
                  label="Receiver's name*"
                  onBlur={handleBlur}
                  value={values.receiverName}
                  onChange={handleChange}
                  errorText={touched.receiverName && errors.receiverName}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullwidth
                  name="address"
                  label="Complete address*"
                  onBlur={handleBlur}
                  value={values.address}
                  onChange={handleChange}
                  errorText={touched.address && errors.address}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullwidth
                  label="Alternative number (optional)"
                  name="phoneAlt"
                  onBlur={handleBlur}
                  value={values.phoneAlt}
                  onChange={handleChange}
                  errorText={touched.phoneAlt && errors.phoneAlt}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullwidth
                  name="floorNo"
                  label="Floor no (optional)"
                  onBlur={handleBlur}
                  value={values.floorNo}
                  onChange={handleChange}
                  errorText={touched.floorNo && errors.floorNo}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullwidth
                  name="nearby"
                  label="Nearby (optional)"
                  onBlur={handleBlur}
                  value={values.nearby}
                  onChange={handleChange}
                  errorText={touched.nearby && errors.nearby}
                />
              </Grid>
            </Grid>
          </Box>
          <Button type="submit" variant="contained" color="primary">
            Save Changes
          </Button>
        </form>
      )}
    </Formik>
  );
}
