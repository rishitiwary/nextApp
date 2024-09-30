"use client";
import { PropsWithChildren } from "react";
import CustomerDashboardLayout from "@component/layout/customer-dashboard";
import ProtectedPage from "@component/ProtectedPage";
import { useAppContext } from "@context/app-context";
export default function Layout({ children }: PropsWithChildren) {
  const { state } = useAppContext();
 
  return (
    <>
    {state.userData? <CustomerDashboardLayout>{children}</CustomerDashboardLayout>:<ProtectedPage/>}
  
    </>

  );
  
 
}
