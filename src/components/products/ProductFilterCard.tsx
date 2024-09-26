"use client";

import Card from "@component/Card";
import Divider from "@component/Divider";
import FlexBox from "@component/FlexBox";
import Image from "@component/Image";
import { H6, SemiSpan } from "@component/Typography";
import { useEffect, useState } from "react";
import Grid from "@component/grid/Grid";

type Props = {
  subCat?: any;
  token?: any;
  storeCode?: any;
  subcategoryList?:any;
  setNotificationData?:any;

}

export default function ProductFilterCard({ subCat, token, storeCode }: Props) {
  const [subcategories, setSubCategories] = useState([]);
  const handleClick = (item) => {
    subCat(item);
  }
  useEffect(() => {
    let subcategoryList: any = localStorage.getItem("subcategories");
    setSubCategories(JSON.parse(subcategoryList));
  }, []);

  return (
    <Card p="18px 27px" elevation={5} borderRadius={8}>
      <H6 mb="16px">Categories</H6>
      <Grid container spacing={6}>

        {subcategories && subcategories.map((item, index) =>
          <Grid item lg={12} md={12} xs={6}>
          <Card p="25px 27px" m={1} elevation={6}  borderRadius={8} key={index}>
            
            <FlexBox
              justifyContent="center"
              alignItems="center"
              cursor="pointer"
              onClick={() => handleClick(item.name)}
            
            >
              <Grid item lg={4} sm={4} xs={12}>
              <Image
                maxHeight={50}
                maxWidth={50}
                src={item.imageUrl}
                alt={item.name}
                style={{ borderRadius: 50 }}
              />
              </Grid>
             
              <Grid item lg={8} sm={8} xs={12}>
              <SemiSpan style={{ color: 'black' }} pl={2}> {item.name}</SemiSpan>
              </Grid>
              
             
            </FlexBox>
          </Card>
        </Grid>
        

        )}
      </Grid>
      <Divider mt="18px" mb="24px" />

     
    </Card>
  );
}



const otherOptions = ["On Sale", "In Stock", "Featured"];
const brandList = ["Maccs", "Karts", "Baars", "Bukks", "Luasis"];
const colorList = ["#1C1C1C", "#FF7A7A", "#FFC672", "#84FFB5", "#70F6FF", "#6B7AFF"];
