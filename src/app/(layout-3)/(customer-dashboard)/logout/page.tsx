"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Spinner from "@component/Spinner";
import FlexBox from "@component/FlexBox";

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    localStorage.clear();
    window.location.href = '/';  // Use router.replace instead of router.push
  }, [router]);

  return <div>  <FlexBox justifyContent="center">
    <Spinner />
  </FlexBox></div>;
};

export default Logout;
