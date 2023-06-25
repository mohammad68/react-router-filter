import { Grid } from "@mui/material";
import MainLayout from "../Layout/MainLayout";
import SidebarLayout from "../Layout/SidebarLayout";

export default function HomePage() {
  return (
    <div style={{ margin: "0" }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <MainLayout />
        </Grid>
        <Grid item xs={4}>
          <SidebarLayout />
        </Grid>
      </Grid>
    </div>
  );
}
