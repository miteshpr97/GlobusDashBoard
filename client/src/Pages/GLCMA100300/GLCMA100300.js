import React, { useState } from "react";
import {
  Box,

  FormControl,
  InputLabel,
  Select,
  MenuItem,

} from "@mui/material";

import SideBar from "../../component/SideBar";
import CommonBtn from "../../component/CommonComponnets/CommonBtn";
import UserList from "./UserList/UserList";

const GLCMA100300 = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const [module, setModule] = useState('');

  const Save_Click = () => {
    alert(`Save GLCMA100200 button clicked!`);
  };


  const handleChange = (event) => {
    setModule(event.target.value);
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
          <CommonBtn PAGE_CD="GLCMA100200" SAVE_CLICK={Save_Click} />
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



          <div  style={{  width:"400px"}}>
            <FormControl fullWidth>
              <InputLabel id="module-label">Module</InputLabel>
              <Select
                labelId="module-label"
                id="module-select"
                value={module}
                label="Module"
                onChange={handleChange}
              >
                <MenuItem value="AM">AM</MenuItem>
                <MenuItem value="CM">CM</MenuItem>
              </Select>
            </FormControl>
          </div>

        </Box>
        <Box
          sx={{
            width: "100%",
            marginTop: "10px",
            display: "flex",
            overflowX: "hidden",
            background: "#dddddd",
            padding: "10px",
          }}
        >
          <UserList 

          module={module}
          
          
          />
        </Box>
      </Box>
    </Box>
  );
};

export default GLCMA100300;
