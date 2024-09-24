"use client"; // This ensures that the component is rendered on the client side

import { PropsWithChildren } from "react";
import AppLayout from "@component/layout/layout-3";

export default function Layout({ children }: PropsWithChildren) {
  return <AppLayout>{children}</AppLayout>;
}
