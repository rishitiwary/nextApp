"use client";

import { PropsWithChildren } from "react";
import dynamic from "next/dynamic";

// Dynamically import components to disable SSR
const AppLayout = dynamic(() => import("../layout-1"), { ssr: false });
const Navbar = dynamic(() => import("@component/navbar/Navbar"), { ssr: false });
const Container = dynamic(() => import("@component/Container"), { ssr: false });

export default function ShopLayout({ children }: PropsWithChildren) {
  return (
    <AppLayout navbar={<Navbar datas={undefined} />}>
      <Container my="2rem">{children}</Container>
    </AppLayout>
  );
}
