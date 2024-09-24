"use client"; // Ensure this component is rendered on the client side

import { Fragment, useEffect, useState } from "react";
// API FUNCTIONS
import apiList from "@utils/__api__/apiList";
// GLOBAL CUSTOM COMPONENTS
import { Card1 } from "@component/Card1";
import DashboardPageHeader from "@component/layout/DashboardPageHeader";
// PAGE SECTION COMPONENTS
import { BackToAddress, AddressForm } from "@sections/customer-dashboard/address";
import { useParams } from "next/navigation";
import useAxios from "custom/useAxios";

const AddressDetails = () => {
  const params = useParams();
  const [address, setAddress] = useState(null); // Changed to null for better state handling
  const { response: addressResponse, error: addressError, loading: addressLoading, fetchData: addressFetchData } = useAxios();

  // Fetch address info
  const fetchData = async () => {
    try {
      const response = await addressFetchData({
        url: `${apiList.ADDRESS}/${params.id}`,
        method: "GET",
        data: null,
        params: null,
        headers: null,
      });
      setAddress(response); // Set the fetched address data
    } catch (error) {
      console.error("Error fetching address data:", error);
    }
  };

  useEffect(() => {
    fetchData(); // Call fetchData when component mounts
  }, [params.id]); // Re-fetch when the address ID changes

  return (
    <Fragment>
      <DashboardPageHeader
        iconName="pin_filled"
        title="Edit Address"
        button={<BackToAddress />}
      />

      <Card1 borderRadius={8}>
        {addressLoading && <div>Loading address...</div>} {/* Loading state */}
        {addressError && <div>Error loading address: {addressError.message}</div>} {/* Error handling */}
        {address && <AddressForm address={address} />} {/* Render AddressForm with fetched address */}
      </Card1>
    </Fragment>
  );
};

export default AddressDetails;
