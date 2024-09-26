"use client";

import Icon from "../icon/Icon";
import FlexBox from "../FlexBox";
import Container from "../Container";
import Typography, { Small } from "../Typography";
import StyledTopbar from "./styles";
import Link from "next/link";

export default function Topbar() {



  return (
    <StyledTopbar>
      <Container display="flex" justifyContent="space-between" alignItems="center" height="100%">
        <FlexBox className="topbar-left">
          <div className="logo">
            <img src="/assets/images/icons/logowhite.svg" alt="logo" />
          </div>

          <FlexBox alignItems="center">
            <Icon size="14px">phone-call</Icon>
            <span>+91 8448444943</span>
          </FlexBox>

          <FlexBox alignItems="center" ml="20px">
            <Icon size="14px">mail</Icon>
            <span>contactus@grozep.com</span>
          </FlexBox>
        </FlexBox>

        <FlexBox className="topbar-right" alignItems="center">

          <Link href="/contact-us">
            <Typography
              direction="right" >
              <FlexBox alignItems="center" height="40px">

                <Small fontWeight="600" color="#FFFFFF">  Need Help?</Small>

              </FlexBox>
            </Typography>
          </Link>
        </FlexBox>
      </Container>
    </StyledTopbar>
  );
}


