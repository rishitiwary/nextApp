// PAGE SECTION COMPONENTS
"use client";
import dynamic from "next/dynamic";
const Home = dynamic(() => import("./(layout-1)/home/page"), { ssr: false });
export default function Index() {
  return (
    <>
      <Home />
    </>
  );
}
