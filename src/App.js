import React from "react";
import { Grid } from "@mui/material";
import youtube from "./api/youtube";

export default function App() {
  return (
    <Grid justify="center" container spacing={16}>
      <Grid item xs={12}>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            {/* {SEARCH BAR} */}
          </Grid>
          <Grid item xs={8}>
            {/* VIDEO DETAILS */}
          </Grid>
          <Grid item xs={4}>
            {/* VIDEO LIST */}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
