"use client";
import { PropsWithChildren } from "react";
import dynamic from "next/dynamic";

// Dynamically import AppLayout to ensure it's rendered on the client
const AppLayout = dynamic(() => import("@component/layout/layout-1"), { ssr: false });

export default function Layout({ children }: PropsWithChildren) {
  return <AppLayout>{children}</AppLayout>;
}
