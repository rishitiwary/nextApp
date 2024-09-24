"use client";
import { Fragment, useEffect, useState } from "react";
// GLOBAL CUSTOM COMPONENTS
import { Card1 } from "@component/Card1";
import DashboardPageHeader from "@component/layout/DashboardPageHeader";
// PAGE SECTION COMPONENTS
import { BackToAddress, AddressForm } from "@sections/customer-dashboard/address";
import { useSearchParams } from "next/navigation";

const CreateAddressContent = () => {
  const [searchParams, setSearchParams] = useState(null);
  const params = useSearchParams();

  useEffect(() => {
    // This will run only on the client side
    if (params) {
      setSearchParams(params);
    }
  }, [params]);

  // Show a loading state while waiting for searchParams to be set
  if (!searchParams) {
    return <p>Loading...</p>; // or any loading spinner
  }

  return (
    <Fragment>
      <DashboardPageHeader
        iconName="pin_filled"
        title="Add New Address"
        button={<BackToAddress />}
      />
      <Card1 borderRadius={8}>
        <AddressForm searchParams={searchParams} />
      </Card1>
    </Fragment>
  );
};

export default function CreateAddress() {
  return <CreateAddressContent />;
}
