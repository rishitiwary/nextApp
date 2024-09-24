"use client"; // Ensure this component is rendered on the client side

import { PropsWithChildren, useEffect, useState } from "react";
import Grid from "@component/grid/Grid";
import DashboardNavigation from "../DashboardNavigation";
// STYLED COMPONENT
import { StyledGrid } from "../styles";

export default function CustomerDashboardLayout({ children }: PropsWithChildren) {
  const [data, setData] = useState(null);

  // Example of client-side data fetching
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/data'); // Adjust your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <Grid container spacing={6}>
      <StyledGrid item lg={3} xs={12}>
        <DashboardNavigation />
      </StyledGrid>

      <Grid item lg={9} xs={12}>
        {children}
        {/* Render data or any other logic you need */}
        {data && <div>{JSON.stringify(data)}</div>} {/* Example rendering */}
      </Grid>
    </Grid>
  );
}
