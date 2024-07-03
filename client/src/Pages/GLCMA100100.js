import { Box, Button } from "@mui/material";
import React from "react";
import SideBar from "../component/SideBar";
import CommonBtn from "../component/CommonComponnets/CommonBtn";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";

import IconButton from "@mui/material/IconButton";

import SearchIcon from "@mui/icons-material/Search";

const GLCMA100100 = () => {
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
        <Box
          sx={{
            width: "100%",
            height: "60px",
            background: "#dddddd",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <CommonBtn PAGE_CD="GLCMA100100" />
        </Box>
        <Box
          sx={{
            width: "100%",
            background: "#dddddd",
            marginTop: "10px",
            padding: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 300,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search"
              inputProps={{ "aria-label": "search " }}
            />

            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#003285", color: "white" }}
          >
            ADD EMPLOYEE
          </Button>
        </Box>
        <Box
          sx={{
            width: "100%",
            height:"63vh",
            background: "red",
            marginTop: "10px",
            padding: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{width:"30%", height:"100%", background:"yellow"}}>
            
          </Box>
          <Box sx={{width:"70%", height:"100%", background:"green"}}></Box>
          </Box>
      </Box>
    </Box>
  );
};

export default GLCMA100100;
