import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";
import axios from "axios";

const UserAccess = ({ selectedModule }) => {
  const [moduleData, setModuleData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    const fetchModuleData = async () => {
      if (!selectedModule) return; 

      try {
        const response = await axios.post("/api/GLCMA100300/data", {
          MODULE_CD: selectedModule.M_DVN,
          CODE_NO: selectedModule.CODE_NO,
        });

        if (response.status === 200 && Array.isArray(response.data)) {
          setModuleData(response.data);
        } else {
          console.error("Unexpected response data:", response.data);
        }
      } catch (error) {
        console.error("Error fetching module data:", error);
      }
    };

    fetchModuleData();
  }, [selectedModule]); 

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, moduleData.length - page * rowsPerPage);

  return (
    <>
      <TableContainer component={Paper} sx={{ width: "100%", maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow style={{ backgroundColor: "#f5f5f5" }}>
              <TableCell style={{ fontWeight: "bold" }}>Module</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Code DVN</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Code NO</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Code NM</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Code NMH</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Code NMA</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Code NMO</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>SUB_GUN 1</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>SUB_GUN 2</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>SUB_GUN 3</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>SUB_GUN 4</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>SUB_GUN 5</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>SORT_BY</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>RMKS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {moduleData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((module, index) => (
                <TableRow key={index}>               
                  <TableCell>{module.M_DVN}</TableCell>
                  <TableCell>{module.C_DVN}</TableCell>
                  <TableCell>{module.CODE_NO}</TableCell>
                  <TableCell>{module.CODE_NM}</TableCell>
                  <TableCell>{module.CODE_NMH}</TableCell>
                  <TableCell>{module.CODE_NMA}</TableCell>
                  <TableCell>{module.CODE_NMO}</TableCell>
                  <TableCell>{module.SUB_GUN1}</TableCell>
                  <TableCell>{module.SUB_GUN2}</TableCell>
                  <TableCell>{module.SUB_GUN3}</TableCell>
                  <TableCell>{module.SUB_GUN4}</TableCell>
                  <TableCell>{module.SUB_GUN5}</TableCell>
                  <TableCell>{module.ORDER_NO}</TableCell>
                  <TableCell>{module.SORT_BY}</TableCell>
                  <TableCell>{module.RMKS}</TableCell>
                </TableRow>
              ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={14} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={moduleData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default UserAccess;

