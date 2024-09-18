import { Box } from "@mui/material";
import React, { useState } from "react";
import SideBar from "../../component/SideBar";
import CommonBtn from "../../component/CommonComponnets/CommonBtn";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import CreateCustomer from "./CreateCustomer/CreateCustomer";


const GLAMA100100 = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const Save_CLick = () => {
    alert(`Save GLAMA100100 button clicked!`);
  };

  const sidebarWidth = isSidebarOpen ? 200 : 0; 
  return (
    <Box sx={{ display: "flex", width: "100vw", overflow: "hidden" }}>
      {isSidebarOpen && <SideBar sx={{ width: sidebarWidth, flexShrink: 0 }} />}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginTop: "55px",
          overflowX: "hidden",
          width: `calc(100vw - ${sidebarWidth}px)`,
        }}
      >
        <Box>
          <CommonBtn PAGE_CD="GLAMA100100" SAVE_CLICK={Save_CLick} />
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
            width: "100%",
            marginTop: "10px",
            display: "flex",
            overflowX: "hidden",
            background: "red",
            padding: "10px",
          }}
        >
      <CreateCustomer/>
        </Box>
      </Box>
    </Box>
  );
};


export default GLAMA100100