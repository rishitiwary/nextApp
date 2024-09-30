"use client"
import Box from "@component/Box";
import SearchResult from "./SearchResult";
import { useState, useEffect, useRef } from "react";
import apiList from "@utils/__api__/apiList";
import useAxios from "custom/useAxios";
import { defaults } from "config/default";
import Notification from "@component/Notification";
import { useSearchParams } from "next/navigation";
import Spinner from "@component/Spinner";
import FlexBox from "@component/FlexBox";
import axios from "axios";
// ==============================================================
interface Props {
  params: { slug: string };
  page: { pageNo: string };
}
// ==============================================================

export default function ProductSearchResult({ params }: Props) {

  const [storeCode, setStoreCode] = useState('');
  const [token, setToken] = useState('');
  const searchParams = useSearchParams()
  const type = searchParams.get('type');
  const search = searchParams.get('subcategories')
  const [notificatonData, setNotificationData] = useState({ 'status': false });
  const [currentPage, setCurrentPage] = useState(1);
  const [subCategory, setSubCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMoreData, setHasMoreData] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);
  const [products, setProducts] = useState([]);

  const fetchData = async (currentPage) => {
    setIsLoading(true);
    try {
      const datas = {
        category: decodeURI(params.slug),
      };
      const response = await axios({
        url: `${apiList.PRODUCT_BY_CATEGORY}${currentPage}`,
        method: 'POST',
        data: datas,
        headers: {
          storecode: storeCode,
        },
      });

      const newData = response.data.data || [];

      if (Array.isArray(newData) && newData.length > 0) {
        setProducts((prevProducts) => {

          if (!Array.isArray(prevProducts)) {

            return newData;
          }

          const existingIds = new Set(prevProducts.map((item) => item.id));
          const filteredData = newData.filter((item) => !existingIds.has(item.id));

          return [...prevProducts, ...filteredData];
        });
        setIsLoading(false);
      } else {
        setHasMoreData(false);
        setIsLoading(false);
      }
    } catch (error) {
      console.log("Error fetching inventory data:", error);
    }
  };

  const fetchDataBySubCategory = async (currentPage) => {
    setIsLoading(true);
    try {
      const response = await axios({
        url: `${apiList.PRODUCT_BY_SUB_CATEGORY}?page=${currentPage}&subcategory=${subCategory}`,
        method: 'GET',
        headers: {
          storecode: storeCode,
        },
      });


      const newData = response.data.data || [];

      if (Array.isArray(newData) && newData.length > 0) {
        setProducts((prevProducts) => {

          if (!Array.isArray(prevProducts)) {
            console.error('prevProducts is not an array', prevProducts);
            return newData;
          }

          const existingIds = new Set(prevProducts.map((item) => item.id));
          const filteredData = newData.filter((item) => !existingIds.has(item.id));

          return [...prevProducts, ...filteredData];
        });
        setIsLoading(false);
      } else {
        setHasMoreData(false);
        setIsLoading(false);
      }
    } catch (error) {
      console.log("Error fetching inventory data:", error);
    }
  };


  useEffect(() => {
    if (subCategory !== null) {
      setCurrentPage(1);
      setProducts([]);
      fetchDataBySubCategory(1);
    }

  }, [subCategory]);
  useEffect(() => {
    const locationResponse = localStorage.getItem('locationResponse');
   
    const userData = localStorage.getItem('userData');
    if (locationResponse !== null) {
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

    if (userData) {
      setToken(JSON.parse(userData).token);
    }
   
  
  }, []);
useEffect(()=>{
  if(storeCode){
    fetchData(1);
  }

},[storeCode]);

  // Infinite scrolling with IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            if (entries[0].isIntersecting && hasMoreData && !isLoading) {
                setIsLoading(true); 
                setCurrentPage((prevPage) => prevPage + 1); 
            }
        },
        { threshold: 1.0 } 
    );

    if (bottomRef.current) {
        observer.observe(bottomRef.current); 
    }

    return () => {
        if (bottomRef.current) {
            observer.unobserve(bottomRef.current); // Clean up the observer on unmount
        }
    };
}, [hasMoreData, isLoading]);

  // Load more data when page number changes
  useEffect(() => {
    if (currentPage > 1) {
      fetchData(currentPage);
    }
    if (subCategory !== null) {
      fetchDataBySubCategory(currentPage);
    }
  }, [currentPage]);


  return (
    <Box pt="20px">
      <SearchResult sortOptions={sortOptions} subcategory={search && search} productData={!!products && products} subCat={setSubCategory} setNotificationData={setNotificationData} storeCode={storeCode} token={token} />

      <>
        {isLoading && hasMoreData && (
          <FlexBox justifyContent="center">
            <Spinner />
          </FlexBox>
        )}
       
        {hasMoreData && <div ref={bottomRef} style={{ height: "1px" }} />}
      </>
    </Box>
  );
}

const sortOptions = [
  { label: "Relevance", value: "Relevance" },
  { label: "Date", value: "Date" },
  { label: "Price Low to High", value: "Price Low to High" },
  { label: "Price High to Low", value: "Price High to Low" }
];
