import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Box,
  TablePagination,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const UserAccess = () => {
  const data = Array.from({ length: 100 }, (_, index) => ({
    CODE_DVN: `Code Division ${index + 1}`,
    CODE_NO: `Code No ${index + 1}`,
    CODE_DO: `Code Do ${index + 1}`,
    CODE_NM1: `Code Name 1 ${index + 1}`,
    CODE_NM2: `Code Name 2 ${index + 1}`,
    CODE_NM3: `Code Name 3 ${index + 1}`,
    CODE_NM4: `Code Name 4 ${index + 1}`,
    CODE_DIV1: `Code Div 1 ${index + 1}`,
    CODE_DIV2: `Code Div 2 ${index + 1}`,
    CODE_DIV3: `Code Div 3 ${index + 1}`,
    CODE_DIV4: `Code Div 4 ${index + 1}`,
    CODE_DIV5: `Code Div 5 ${index + 1}`,
    ORDER_NO: `Order No ${index + 1}`,
    USE_YN: `Use Y/N ${index + 1}`,
  }));

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [permissions, setPermissions] = useState({});

  const handleCheckboxChange = (index, field) => {
    setPermissions((prevState) => ({
      ...prevState,
      [index]: {
        ...prevState[index],
        [field]: !prevState[index][field],
      },
    }));
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  }));

  return (
    <>
      <TableContainer component={Paper} sx={{ width: "100%", maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow style={{ backgroundColor: "#f5f5f5" }}>
              <TableCell style={{ fontWeight: "bold" }}>Code Division</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Code No</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Code Do</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Code Name 1</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Code Name 2</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Code Name 3</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Code Name 4</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Code Div 1</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Code Div 2</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Code Div 3</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Code Div 4</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Code Div 5</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Order No</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Use Y/N</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                const actualIndex = page * rowsPerPage + index;
                return (
                  <StyledTableRow
                    key={actualIndex}
                    style={{ borderBottom: "1px solid #ddd" }}
                  >
                    <TableCell>{row.CODE_DVN}</TableCell>
                    <TableCell>{row.CODE_NO}</TableCell>
                    <TableCell>{row.CODE_DO}</TableCell>
                    {[
                      "CODE_NM1",
                      "CODE_NM2",
                      "CODE_NM3",
                      "CODE_NM4",
                      "CODE_DIV1",
                      "CODE_DIV2",
                      "CODE_DIV3",
                      "CODE_DIV4",
                      "CODE_DIV5",
                      "ORDER_NO",
                      "USE_YN",
                    ].map((field) => (
                      <TableCell align="center" key={field}>
                        <Checkbox
                          checked={
                            permissions[actualIndex]
                              ? permissions[actualIndex][field]
                              : false
                          }
                          onChange={() =>
                            handleCheckboxChange(actualIndex, field)
                          }
                        />
                      </TableCell>
                    ))}
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default UserAccess;
