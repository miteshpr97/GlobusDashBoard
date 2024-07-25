import { Box } from "@mui/material";
import React from "react";
import SideBar from "../../component/SideBar";
import CommonBtn from "../../component/CommonComponnets/CommonBtn";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import EmpList from "./EmpList/EmpList";
// import EmpInfo from "./EmpInfo/EmpInfo";

const GLCMA100200 = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginTop: "55px",
        }}
      >
        <Box>
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
        </Box>
        <Box
          sx={{
            marginTop: "10px",
          }}
        >
          <EmpList />
          

        </Box>
      </Box>
    </Box>
  );
};

export default GLCMA100200;

