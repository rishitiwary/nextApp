"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import FlexBox from "@component/FlexBox";
import Spinner from "@component/Spinner";

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    localStorage.clear();
    window.location.href = '/';  // Use router.replace instead of router.push
  }, [router]);

  return <div>
    <FlexBox justifyContent="center">
      <Spinner />
    </FlexBox>

  </div>;
};

export default Logout;
