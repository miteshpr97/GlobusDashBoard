
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
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
  const UserListWidth = 270;
  const [moduleData, setModuleData] = useState([]);
  const [selectedModule, setSelectedModule] = useState(null);

  useEffect(() => {
    const fetchModule = async () => {
      try {
        const response = await axios.post("/api/GLCMA100300/codeNo", { MODULE_CD: module });
        if (response.status === 200 && Array.isArray(response.data)) {
          setModuleData(response.data);
        } else {
          console.error("Unexpected response data:", response.data);
          setModuleData([]);
        }
      } catch (error) {
        console.error("Error fetching permissions:", error);
        setModuleData([]);
      }
    };

    fetchModule();
  }, [module]);

  const handleRowClick = (module) => {
    setSelectedModule(module);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        overflowX: "hidden",
        background: "white",
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
          <Table sx={{ minWidth: 100 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{background:"#f3f3f3"}}>
                <TableCell  sx={{fontSize:"13px", fontWeight: "bold", padding:"10px" }}>M_DVN</TableCell>
                <TableCell  sx={{ fontSize:"13px",fontWeight: "bold", padding:"10px" }}>C_DVN</TableCell>
                <TableCell  sx={{fontSize:"13px", fontWeight: "bold", padding:"10px" }}>CODE_NO</TableCell>
                <TableCell  sx={{ fontSize:"13px",fontWeight: "bold", padding:"10px" }}>CODE_NM</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {moduleData.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} align="center">Loading...</TableCell>
                </TableRow>
              ) : (
                moduleData.map((module, index) => (
                  <TableRow
                  key={index}
                  onClick={() => handleRowClick(module)}
                  sx={{
                    '&:last-child td, &:last-child th': { border: 0 },
                    cursor: 'pointer',
                    backgroundColor: selectedModule && selectedModule.CODE_NO === module.CODE_NO ? '#256d89' : 'inherit',
                  }}
                >
                    <TableCell component="th" scope="row" sx={{fontSize:"13px", padding:"10px"}}>{module.M_DVN}</TableCell>
                    <TableCell sx={{fontSize:"13px", padding:"10px"}}>{module.C_DVN}</TableCell>
                    <TableCell sx={{fontSize:"13px", padding:"10px"}}>{module.CODE_NO}</TableCell>
                    <TableCell sx={{fontSize:"13px", padding:"10px"}}>{module.CODE_NM}</TableCell>
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
        <UserAccess selectedModule = {selectedModule} />
      </Box>
    </Box>
  );
};

export default UserList;



