"use client";
import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
// API FUNCTIONS
import apiList from "@utils/__api__/apiList";
import useAxios from "custom/useAxios";
import { currency, tokens } from "@utils/utils";
// GLOBAL CUSTOM COMPONENTS
import Box from "@component/Box";
import Card from "@component/Card";
import Avatar from "@component/avatar";
import Grid from "@component/grid/Grid";
import FlexBox from "@component/FlexBox";
import TableRow from "@component/TableRow";
import Typography, { H3, H5, SemiSpan, Small } from "@component/Typography";
import DashboardPageHeader from "@component/layout/DashboardPageHeader";
import { useAppContext } from "@context/app-context";
import Link from "next/link";
import Icon from "@component/icon/Icon";
import Image from "@component/Image";

type UserInfoResponse = {
    data: {
        user: {
            name: string;
            point: number;
            grade: string;
            gst: string;
            phone: string;
        };
    };
};

type InfoItem = {
    title: string;
    imgs: string;
    links: string;
};

export default function Wallet() {
    const router = useRouter();
    const { state } = useAppContext();
    const token = tokens();
    const {
        response: walletResponse,
        error: walletError,
        loading: walletLoading,
        fetchData: walletInfo,
    } = useAxios();

    const handleFetchData = async () => {
        try {
            // Call API for user details
            await walletInfo({
                url: apiList.WALLET + "?page=1",
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
        } catch (error) {
            console.log("Error fetching data:", error);
        }
    };

    useEffect(() => {
        if (state.userData === null) {
            router.push("/login");
        }
        handleFetchData();
    }, []);






    return (
        <Fragment>
            <DashboardPageHeader
                title="My Wallet"
                iconName="user_filled"
            // button={<EditProfileButton />}
            />

            <Box mb="30px">
                <Grid container spacing={6}>
                    <Grid item lg={12} md={6} sm={12} xs={12} >
                        


                        <TableRow p="0.75rem 1.5rem" mt={2} >
                            <FlexBox flexDirection="column" p="0.5rem">
                            <H5 my="0px">
                                Balance : 
                                {currency(walletResponse?.data.wallet.amount)}</H5>
                               <SemiSpan>Available in account</SemiSpan>
                            </FlexBox>
                            <FlexBox>
                            <h5>Transaction History </h5>
                            </FlexBox>

                        </TableRow>
                        {!!walletResponse && walletResponse.data.transactions.map((item: any, index) => {
                            return (
                            <TableRow p="0.75rem " key={index} mt={2}>
                                <FlexBox flexDirection="column" p="0.5rem">
                                    <Image src="/assets/images/icons/COIN ICON.png" alt="icons" height={50} width={50}/>
                                   
                                </FlexBox>
                                <FlexBox flexDirection="column" p="0.5rem">
                                   {item.description}
                                   <br/>
                                  <SemiSpan> {item.description} | {item.dateTime}</SemiSpan>
                                </FlexBox>
                                <FlexBox flexDirection="column" p="0.5rem" textAlign="right">
                                   {currency(item.amount.toFixed(2))}
                                </FlexBox>

                            </TableRow>
                            );
                        })}

                      

                    </Grid>


                </Grid>
            </Box>



        </Fragment >
    );
}
