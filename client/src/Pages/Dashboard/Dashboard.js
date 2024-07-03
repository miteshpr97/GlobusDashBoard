// import React from "react";

// import Box from "@mui/material/Box";
// import SideBar from "../../component/SideBar";

// import "./Dashboard.css";

// import CommonBtn from "../../component/CommonComponnets/CommonBtn";

// export const Dashboard = () => {
//   return (
//     <Box sx={{ display: "flex" }}>
//       <SideBar />
//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           p: 3,
//           marginTop: "55px",
//           height: "93vh",
//         }}
//       >

//         <CommonBtn
//           PAGE_CD="GLCMA100100"
//         />
//       </Box>
//     </Box>
//   );
// };

import React from "react";

import Box from "@mui/material/Box";
import SideBar from "../../component/SideBar";

import "./Dashboard.css";

import Button from "@mui/material/Button";
import { Stack } from "@mui/material";

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
          background: "pink",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "60px",
            background: "red",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
             <Stack direction="row" spacing={2}>
            <Button variant="contained">Edit</Button>
            <Button variant="contained">Delete</Button>
            <Button variant="contained">Submit</Button>
            <Button variant="contained">View</Button>
            <Button variant="contained">Excel</Button>
            </Stack>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "60px",
            background: "brown",
            marginTop: "10px",
          }}
        ></Box>
      </Box>
    </Box>
  );
};
