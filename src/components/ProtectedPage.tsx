"use client";
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppContext } from "@context/app-context";
const ProtectedPage: React.FC = () => {
  const { state } = useAppContext();

  const router = useRouter();

  useEffect(() => {
    const userData =state.userData; 

    if (userData==null) {
      router.push('/login'); 
    }
  }, [router]);

  return null;  
};

export default ProtectedPage;
