"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ProtectedPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem('userData'); // You can replace this with sessionStorage or cookie as needed

    if (!userData) {
      router.push('/login'); // Redirect to login if no token
    }
  }, [router]);

  return null; // Return null instead of an empty statement
};

export default ProtectedPage;
