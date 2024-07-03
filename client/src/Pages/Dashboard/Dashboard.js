import React from "react";

import Box from "@mui/material/Box";
import SideBar from "../../component/SideBar";

import "./Dashboard.css";


import CommonBtn from "../../component/CommonComponnets/CommonBtn";

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

        <CommonBtn
          PAGE_CD="GLCMA100100"
        />
      </Box>
    </Box>
  );
};
