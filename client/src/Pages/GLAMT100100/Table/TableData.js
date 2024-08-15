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
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import axios from "axios";

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

  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  console.log(data , "take data");
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("api/GLAMT100100/details");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
      <TableContainer component={Paper} sx={{ overflow: "auto", maxHeight: 440 }}>
        <Table
          size="small"
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
    .map((row, index) => (
      <StyledTableRow key={index}>
        <TableCell>{row.REG_DATE}</TableCell>
        <TableCell>{row.POST_DTE}</TableCell>
        <TableCell>{row.DOC_DTE}</TableCell>
        <TableCell>{row.REF_TYPE}</TableCell>
        <TableCell>{row.REF_NO}</TableCell>
        <TableCell>{row.REF_DESC}</TableCell>
        <TableCell>{row.RMKS}</TableCell>
        <TableCell>{row.LCURR_CD}</TableCell>
        <TableCell>{row.LAMT}</TableCell>
        <TableCell>{row.FCURR_CD}</TableCell>
        <TableCell>{row.FAMT}</TableCell>
        <TableCell>{row.EXCHANGE_RATE}</TableCell>
        <TableCell>{row.REF_TNO}</TableCell>
      </StyledTableRow>
    ))}
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