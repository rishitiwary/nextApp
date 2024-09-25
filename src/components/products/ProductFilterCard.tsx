"use client";

import Card from "@component/Card";
import Avatar from "@component/avatar";
import Rating from "@component/rating";
import Divider from "@component/Divider";
import FlexBox from "@component/FlexBox";
import CheckBox from "@component/CheckBox";
import TextField from "@component/text-field";
import Image from "next/image";
import Typography, { H5, H6, Paragraph, SemiSpan } from "@component/Typography";
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
          <Card p="25px 27px" m={1} elevation={5} borderRadius={8} key={index}>
            <FlexBox
              justifyContent="space-between"
              alignItems="center"
              cursor="pointer"
              onClick={() => handleClick(item.name)}
            
            >
              <Image
                height={60}
                width={60}
                src={item.imageUrl}
                alt={item.name}
                style={{ borderRadius: 50 }}
              />
              <SemiSpan style={{ color: 'black' }} p={1}> {item.name}</SemiSpan>
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
