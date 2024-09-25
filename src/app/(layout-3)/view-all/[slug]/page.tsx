"use client"
import Box from "@component/Box";
import SearchResult from "./SearchResult";
import { useState, useEffect } from "react";
import apiList from "@utils/__api__/apiList";
import axios from "axios";
import { defaults } from "config/default";
import Notification from "@component/Notification";
import { useSearchParams } from "next/navigation";
import { tokens } from "@utils/utils";
// ==============================================================
interface Props {
  params: { slug: string };
  page: { pageNo: string };
}
// ==============================================================

export default function ViewAll({ params }: Props) {

  const token = tokens();
  const searchParams = useSearchParams()
  const [notificatonData, setNotificationData] = useState({ 'status': false });
  const [currentPage, setCurrentPage] = useState(1);
  const [storeCode, setStoreCode] = useState('');


  const [resultList, setResultList] = useState<string[]>([]);

  const handleViewAll = async () => {
   
    const data = {
      "category": params.slug,
      "bannerId": 0,
      "isBanner": false,
      "isExpiry": false
    }
    try {
      if (storeCode) {
   
        const response = await axios({
          url: `${apiList.PRODUCT_MIX}?page=${currentPage}`,
          method: 'POST',
          data: data,
          headers: {
            storecode: storeCode
          }
        });

        setResultList(response.data.data);
        return response;
      }
    } catch (error) {
      console.log('Error in handleAddToCart:', error);
      throw error; // Re-throw to handle it in the calling function
    }
  }


  useEffect(() => {
    const locationResponse = localStorage.getItem('locationResponse');
    const userData = localStorage.getItem('userData');

    if (locationResponse) {
      try {
        const parsedData = JSON.parse(locationResponse);
        if (parsedData && parsedData.storecode) {
          setStoreCode(parsedData.storecode);
        } else {
          console.error("Location response does not contain 'storecode'");
        }
      } catch (error) {
        console.error("Error parsing location response:", error);
      }
    } else {
    
      setStoreCode(defaults.storecode);
    }
  
  

  }, []);
  useEffect(()=>{
    if(storeCode){
      handleViewAll();
    }
   
  },[storeCode]);

  return (
    <Box pt="20px">
      <SearchResult sortOptions={sortOptions} productData={resultList && resultList} setNotificationData={setNotificationData} storeCode={storeCode} token={token} />
    </Box>
  );
}

const sortOptions = [
  { label: "Relevance", value: "Relevance" },
  { label: "Date", value: "Date" },
  { label: "Price Low to High", value: "Price Low to High" },
  { label: "Price High to Low", value: "Price High to Low" }
];
