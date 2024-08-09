import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const TableData = () => {
  const headings = [
    "Reg Date",
    "Posting Date",
    "Document Date",
    "Ref Type",
    "Ref No",
    "Desc",
    "Remarks",
    "Local Currency",
    "Local Amount",
    "Foreign Currency",
    "Foreign Amount",
    "Exchange Rate",
    "Transaction Ref No"
  ];

  const data = Array.from({ length: 100 }, (_, index) => ({}));

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

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
    <Box>
      <TableContainer component={Paper} sx={{    overflow: "auto", maxHeight: 440 }}>
        <Table  size="sm"
          stickyHeader
          style={{
            minWidth: 650,
            borderCollapse: "collapse",
          }}>
          <TableHead>
            <TableRow style={{ backgroundColor: "#f5f5f5" }}>
              {headings.map((heading, index) => (
                <TableCell key={index} style={{ fontWeight: "bold" }}>
                  {heading}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((_, index) => {
                return (
                  <StyledTableRow key={index}>
                    {headings.map((_, idx) => (
                      <TableCell key={idx}></TableCell>
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
    </Box>
  );
};


export default TableData