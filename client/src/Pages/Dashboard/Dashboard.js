import React from "react";

import Box from "@mui/material/Box";
import SideBar from "../../component/SideBar";


import "./Dashboard.css"

export const Dashboard = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginTop: "55px",
          height: "93vh",
        }}
      >
        
    helllo
      </Box>
    </Box>
  );
};
