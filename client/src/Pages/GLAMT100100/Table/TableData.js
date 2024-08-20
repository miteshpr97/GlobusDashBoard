// // 


// import React, { useState, useEffect } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   TablePagination,
//   Box,
// } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import axios from "axios";

// const TableData = () => {
//   const headings = [
//     "Reg Date",
//     "Posting Date",
//     "Document Date",
//     "Ref Type",
//     "Ref No",
//     "Desc",
//     "Remarks",
//     "Local Currency",
//     "Local Amount",
//     "Foreign Currency",
//     "Foreign Amount",
//     "Exchange Rate",
//     "Transaction Ref No"
//   ];

//   const [data, setData] = useState([]);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);

//   console.log(data , "take data");
  

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.post("api/GLAMT100100/details");
//         setData(response.data.reverse());
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     "&:nth-of-type(odd)": {
//       backgroundColor: theme.palette.action.hover,
//     },
//   }));

//   return (
//     <Box>
//       <TableContainer component={Paper} sx={{ overflow: "auto", maxHeight: 440 }}>
//         <Table
//           size="small"
//           stickyHeader
//           style={{
//             minWidth: 650,
//             borderCollapse: "collapse",
//           }}>
//           <TableHead>
//             <TableRow style={{ backgroundColor: "#f5f5f5" }}>
//               {headings.map((heading, index) => (
//                 <TableCell key={index} style={{ fontWeight: "bold" }}>
//                   {heading}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//   {data
//     .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//     .map((row, index) => (
//       <StyledTableRow key={index}>
//         <TableCell>{row.REG_DATE}</TableCell>
//         <TableCell>{row.POST_DTE}</TableCell>
//         <TableCell>{row.DOC_DTE}</TableCell>
//         <TableCell>{row.REF_TYPE}</TableCell>
//         <TableCell>{row.REF_NO}</TableCell>
//         <TableCell>{row.REF_DESC}</TableCell>
//         <TableCell>{row.RMKS}</TableCell>
//         <TableCell>{row.LCURR_CD}</TableCell>
//         <TableCell>{row.LAMT}</TableCell>
//         <TableCell>{row.FCURR_CD}</TableCell>
//         <TableCell>{row.FAMT}</TableCell>
//         <TableCell>{row.EXCHANGE_RATE}</TableCell>
//         <TableCell>{row.REF_TNO}</TableCell>
//       </StyledTableRow>
//     ))}
// </TableBody>

//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[10, 25, 100]}
//         component="div"
//         count={data.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </Box>
//   );
// };

// export default TableData;

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
import moment from "moment"; // Import moment.js

const TableData = () => {
  // Define columns with their properties
  const columns = [
    { id: 'REG_DATE', label: 'Reg Date', minWidth: 100 },
    { id: 'POST_DTE', label: 'Posting Date', minWidth: 100 },
    { id: 'DOC_DTE', label: 'Document Date', minWidth: 100 },
    { id: 'REF_TYPE', label: 'Ref Type', minWidth: 100 },
    { id: 'REF_NO', label: 'Ref No', minWidth: 100 },
    { id: 'REF_DESC', label: 'Desc', minWidth: 200 },
    { id: 'RMKS', label: 'Remarks', minWidth: 150 },
    { id: 'LCURR_CD', label: 'Local Currency', minWidth: 100 },
    { id: 'LAMT', label: 'Local Amount', minWidth: 100 },
    { id: 'FCURR_CD', label: 'Foreign Currency', minWidth: 100 },
    { id: 'FAMT', label: 'Foreign Amount', minWidth: 100 },
    { id: 'EXCHANGE_RATE', label: 'Exchange Rate', minWidth: 100 },
    { id: 'REF_TNO', label: 'Transaction Ref No', minWidth: 100 },
  ];

  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("api/GLAMT100100/details");
        setData(response.data.reverse());
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

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    fontWeight: "bold",
    backgroundColor: theme.palette.primary.main, // Blue background
    color: theme.palette.common.white, // White text
  }));

  // Function to format dates
  const formatDate = (dateString, formatType) => {
    if (formatType === "ISO") {
      return moment(dateString).format("DD/MM/YYYY");
    } else if (formatType === "YYYYMMDD") {
      return moment(dateString, "YYYYMMDD").format("DD/MM/YYYY");
    }
    return dateString;
  };

  return (
    <Box>
      <TableContainer component={Paper} sx={{ overflow: "auto", maxHeight: 440 }}>
        <Table
          size="small"
          stickyHeader
          style={{
            minWidth: 650,
            borderCollapse: "collapse",
          }}
        >
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell key={column.id} style={{ minWidth: column.minWidth }}>
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <StyledTableRow key={index} style={{ height: 50 }}>
                  {columns.map((column) => (
                    <TableCell key={column.id}>
                      {column.id === "REG_DATE" || column.id === "POST_DTE" || column.id === "DOC_DTE"
                        ? formatDate(row[column.id], column.id === "REG_DATE" ? "ISO" : "YYYYMMDD")
                        : row[column.id]}
                    </TableCell>
                  ))}
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

export default TableData;
