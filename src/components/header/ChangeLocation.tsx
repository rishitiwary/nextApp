"use client"
import React, { useEffect, useState } from "react";
import Box from "@component/Box";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ChangeLocation = () => {

    const deliveryTime = !!localStorage.getItem('locationResponse') && JSON.parse(localStorage.getItem('locationResponse')) ? JSON.parse(localStorage.getItem('locationResponse')).regularDurationMin : 8 + ' minutes';
    const deliveryLocation = !!localStorage.getItem('locationResponse') && JSON.parse(localStorage.getItem('locationResponse')) ? JSON.parse(localStorage.getItem('locationResponse')).location : 'Garhwa';
   
    return (
        <>
            <Box cursor="pointer">
                <span style={{ fontWeight: 'bold', fontSize: '17px' }}>Deliver in {deliveryTime}  </span>
                <br />
                {deliveryLocation}
                &nbsp;<FontAwesomeIcon icon="fa fa-caret-down" style={{ fontSize: 17 }} />
            </Box>
        </>
    );
}

export default ChangeLocation;