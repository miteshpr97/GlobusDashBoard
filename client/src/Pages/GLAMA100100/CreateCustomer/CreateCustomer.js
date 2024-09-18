import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, Paper, Pagination, Stack } from "@mui/material";
import CustomerTable from "../CustomerTable/CustomerTable";

const columns = [
  { id: "EMP_CD", label: "Ref No", minWidth: 90 },
  { id: "EMP_NM", label: "Customer Name", minWidth: 150 },
  { id: "ACTIVE_YN", label: "Active YN", minWidth: 100 },
];

const rows = [
  { EMP_CD: "001", EMP_NM: "John Doe", ACTIVE_YN: "Yes" },
  { EMP_CD: "002", EMP_NM: "Jane Smith", ACTIVE_YN: "No" },
  { EMP_CD: "003", EMP_NM: "Mike Johnson", ACTIVE_YN: "Yes" },
  { EMP_CD: "004", EMP_NM: "Alice Brown", ACTIVE_YN: "Yes" },
  { EMP_CD: "005", EMP_NM: "Bob Williams", ACTIVE_YN: "No" },
];

const CreateCustomer = () => {
  const [page, setPage] = useState(1);  
  const [rowsPerPage, setRowsPerPage] = useState(10);  
  const UserListWidth = 270;

  const paginatedRows = rows.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  const handlePageChange = (event, value) => {
    setPage(value);  
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        background: "blue",
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          width: `${UserListWidth}px`,
          height: "100%",
          background: "#f3f3f3",
          overflowX: "auto",
          padding: "10px",
          minHeight: "100%",
        }}
      >
        <TableContainer component={Paper}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedRows.map((row, index) => (
                <TableRow hover key={index}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id}>
                        {value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination component */}
        <Stack spacing={2} sx={{ marginTop: 2, alignItems: "center" }}>
          <Pagination
            count={Math.ceil(rows.length / rowsPerPage)}  
            page={page} 
            onChange={handlePageChange} 
            shape="rounded"
          />
        </Stack>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          height: "100%",
          background: "white",
          overflowX: "auto",
          width: `calc(100% - ${UserListWidth}px)`,
          padding: "10px",
        }}
      >
        <CustomerTable/>
      </Box>
    </Box>
  );
};

export default CreateCustomer;
