import React, { useEffect, useState } from "react";
import { Box} from "@mui/material";
import UserAccess from "../UserAccess/UserAccess";
import axios from "axios";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const UserList = ({ module }) => {
  const UserListWidth = 250; // Example fixed width for UserList


  const [moduleData, setModuleData] = useState("")


  console.log(moduleData, " module data show");




  console.log(module);


  useEffect(() => {
    const fetchModule = async () => {
      try {
        const response = await axios.post("/api/GLCMA100300/codeNo", {
          MODULE_CD: module,

        });

        if (response.status === 200) {
          const data = response.data;
          setModuleData(data)

        }
      } catch (error) {
        console.error("Error fetching permissions:", error);
      }
    };

    fetchModule();

  }, [module]);


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

<TableContainer component={Paper}>
      <Table sx={{ minWidth: 150 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>M_DVN</TableCell>
            <TableCell>C_DVN</TableCell>
            <TableCell>CODE_NO</TableCell>
            <TableCell>CODE_NM</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(!moduleData || moduleData.length === 0) ? (
            <TableRow>
              <TableCell colSpan={4} align="center">Loading</TableCell>
            </TableRow>
          ) : (
            moduleData.map((module, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {module.M_DVN}
                </TableCell>
                <TableCell>{module.C_DVN}</TableCell>
                <TableCell>{module.CODE_NO}</TableCell>
                <TableCell>{module.CODE_NM}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>

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






// if (!moduleData || moduleData.length === 0) {
//   return (
//   // <div>loding...</div>

 
  
//   );
// }
