"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    localStorage.clear();
    window.location.href = '/';  // Use router.replace instead of router.push
  }, [router]);

  return <div>logout</div>;
};

export default Logout;
