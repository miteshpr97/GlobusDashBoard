import React, { useState } from "react";
import { Box, Button, ButtonGroup } from "@mui/material";
import UserAccess from "../UserAccess/UserAccess";

const UserList = () => {
  const UserListWidth = 250; // Example fixed width for UserList
  const [selectedValue, setSelectedValue] = useState("");

  const handleClick = (value) => {
    setSelectedValue(value);
  };

  const options = [
    "M_DVN", "C_DVN", "CODE_NO", "CODE_NM", "CODE_NMH",
    "CODE_NMA", "CODE_NMO", "SUB_GUN1", "SUB_GUN2", "SUB_GUN3",
    "SUB_GUN4", "SUB_GUN5", "SORT_BY", "RMKS"
  ];

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          width: `${UserListWidth}px`,
          height: "100%",
          background: "white",
          overflowX: "auto",
          padding: "10px",
        }}
      >
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical outlined button group"
          sx={{ width: "100%"}}
        >
          {options.map((option) => (
            <Button
              key={option}
              onClick={() => handleClick(option)}
              sx={{
                backgroundColor: selectedValue === option ? "#003285" : "initial",
                color: selectedValue === option ? "white" : "initial",
                "&:hover": {
                  backgroundColor: selectedValue === option ? "#003285" : "lightgray",
                },
                border:"1px solid #dddddd"
              }}
            >
              {option}
            </Button>
          ))}
        </ButtonGroup>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
        
          background: "#f3f3f3",
          overflowX: "auto",
          width: `calc(100% - ${UserListWidth}px)`,
          padding: "10px",
        }}
      >
        <UserAccess />
      </Box>
    </Box>
  );
};

export default UserList;
