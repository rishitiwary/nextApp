"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ProtectedPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem('userData'); 

    if (!userData) {
      router.push('/login'); 
    }
  }, [router]);

  return null;  
};

export default ProtectedPage;
