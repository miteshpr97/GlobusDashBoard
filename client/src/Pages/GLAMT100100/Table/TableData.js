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
// import moment from "moment"; // Import moment.js

// const TableData = () => {
//   // Define columns with their properties

//   const columns = [
//     { id: 'REG_DATE', label: 'Reg Date', minWidth: 100 },
//     { id: 'POST_DTE', label: 'Pos Date', minWidth: 100 },
//     { id: 'DOC_DTE', label: 'Doc Date', minWidth: 100 },
//     { id: 'REF_TYPE', label: 'Ref Type', minWidth: 100 },
//     { id: 'REF_NO', label: 'Ref No', minWidth: 100 },
//     { id: 'REF_DESC', label: 'Description', minWidth: 200 },
//     { id: 'RMKS', label: 'Remarks', minWidth: 150 },
//     { id: 'LCURR_CD', label: 'Local Curr', minWidth: 100 },
//     { id: 'LAMT', label: 'Local Amt', minWidth: 100 },
//     { id: 'FCURR_CD', label: 'Foreign Curr', minWidth: 100 },
//     { id: 'FAMT', label: 'Foreign Amt', minWidth: 100 },
//     { id: 'EXCHANGE_RATE', label: 'Exchange Rate', minWidth: 100 },
//     { id: 'REF_TNO', label: 'Trans Ref No', minWidth: 100 }
//   ];


//   const [data, setData] = useState([]);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);

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

//   const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     fontWeight: "bold",
//      backgroundColor: "#045e84",
//   color:"white"
//   }));

//   // Function to format dates
//   const formatDate = (dateString, formatType) => {
//     if (formatType === "ISO") {
//       return moment(dateString).format("DD/MM/YYYY");
//     } else if (formatType === "YYYYMMDD") {
//       return moment(dateString, "YYYYMMDD").format("DD/MM/YYYY");
//     }
//     return dateString;
//   };

//   return (
//     <Box>
//       <TableContainer component={Paper} sx={{ overflow: "auto", maxHeight: 440 }}>
//         <Table
//           size="small"
//           stickyHeader
//           style={{
//             minWidth: 650,
//             borderCollapse: "collapse",
//           }}
//         >
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <StyledTableCell key={column.id} style={{ minWidth: column.minWidth }}>
//                   {column.label}
//                 </StyledTableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {data
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((row, index) => (
//                 <StyledTableRow key={index} style={{ height: 50 }}>
//                   {columns.map((column) => (
//                     <TableCell key={column.id}>
//                       {column.id === "REG_DATE" || column.id === "POST_DTE" || column.id === "DOC_DTE"
//                         ? formatDate(row[column.id], column.id === "REG_DATE" ? "ISO" : "YYYYMMDD")
//                         : row[column.id]}
//                     </TableCell>
//                   ))}
//                 </StyledTableRow>
//               ))}
//           </TableBody>

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
// import moment from "moment"; 

// const TableData = () => {

//   const columns = [
//     { id: 'REG_DATE', label: 'Reg Date', minWidth: 120 },
//     { id: 'POST_DTE', label: 'Pos Date', minWidth: 120 },
//     { id: 'DOC_DTE', label: 'Doc Date', minWidth: 120 },
//     { id: 'REF_TYPE', label: 'Ref Type', minWidth: 120 },
//     { id: 'REF_NO', label: 'Ref No', minWidth: 120 },
//     { id: 'REF_DESC', label: 'Description', minWidth: 250 },
//     { id: 'RMKS', label: 'Remarks', minWidth: 200 },
//     { id: 'LCURR_CD', label: 'Local Curr', minWidth: 120 },
//     { id: 'LAMT', label: 'Local Amt', minWidth: 120 },
//     { id: 'FCURR_CD', label: 'Foreign Curr', minWidth: 120 },
//     { id: 'FAMT', label: 'Foreign Amt', minWidth: 120 },
//     { id: 'EXCHANGE_RATE', label: 'Exchange Rate', minWidth: 120 },
//     { id: 'REF_TNO', label: 'Trans Ref No', minWidth: 120 }
//   ];

//   const [data, setData] = useState([]);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);

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

//   const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     fontWeight: "bold",
//     backgroundColor: "#045e84",
//     color: "white",
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     fontSize: '12px',
//   }));

//   // Apply consistent text size to TableCell as well
//   const TableBodyCell = styled(TableCell)(({ theme }) => ({
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     fontSize: '12px', 
//   }));

//   const formatDate = (dateString, formatType) => {
//     if (formatType === "ISO") {
//       return moment(dateString).format("DD/MM/YYYY");
//     } else if (formatType === "YYYYMMDD") {
//       return moment(dateString, "YYYYMMDD").format("DD/MM/YYYY");
//     }
//     return dateString;
//   };

//   return (
//     <Box sx={{ width: '100%', overflowX: 'auto' }}>
//       <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
//         <Table
//           size="small"
//           stickyHeader
//           sx={{
//             minWidth: '100%',
//             borderCollapse: 'collapse',
//             '& th, & td': {
//               textAlign: 'center',
//               border: '1px solid rgba(224, 224, 224, 1)',
//               padding: '8px',
//               fontSize: '12px', 
//             },
//           }}
//         >
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <StyledTableCell key={column.id} style={{ minWidth: column.minWidth }}>
//                   {column.label}
//                 </StyledTableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {data
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((row, index) => (
//                 <StyledTableRow key={index} style={{ height: 50 }}>
//                   {columns.map((column) => (
//                     <TableBodyCell key={column.id}>
//                       {column.id === "REG_DATE" || column.id === "POST_DTE" || column.id === "DOC_DTE"
//                         ? formatDate(row[column.id], column.id === "REG_DATE" ? "ISO" : "YYYYMMDD")
//                         : row[column.id]}
//                     </TableBodyCell>
//                   ))}
//                 </StyledTableRow>
//               ))}
//           </TableBody>
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





// new style code

import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Stack,
  Pagination
} from "@mui/material";
import { styled } from "@mui/material/styles";
import axios from "axios";
import moment from "moment";

const TableData = () => {

  const columns = [
    { id: 'REG_DATE', label: 'Reg Date', minWidth: 120 },
    { id: 'POST_DTE', label: 'Pos Date', minWidth: 120 },
    { id: 'DOC_DTE', label: 'Doc Date', minWidth: 120 },
    { id: 'REF_TYPE', label: 'Ref Type', minWidth: 120 },
    { id: 'REF_NO', label: 'Ref No', minWidth: 120 },
    { id: 'REF_DESC', label: 'Description', minWidth: 250 },
    { id: 'RMKS', label: 'Remarks', minWidth: 200 },
    { id: 'LCURR_CD', label: 'Local Curr', minWidth: 120 },
    { id: 'LAMT', label: 'Local Amt', minWidth: 120 },
    { id: 'FCURR_CD', label: 'Foreign Curr', minWidth: 120 },
    { id: 'FAMT', label: 'Foreign Amt', minWidth: 120 },
    { id: 'EXCHANGE_RATE', label: 'Exchange Rate', minWidth: 120 },
    { id: 'REF_TNO', label: 'Trans Ref No', minWidth: 120 }
  ];

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(8);
  console.log(setRowsPerPage);
  

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

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  }));

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    fontWeight: "bold",
    backgroundColor: "#045e84",
    color: "white",
    padding: theme.spacing(1),
    textAlign: 'center',
    fontSize: '12.5px',
    fontFamily: 'Arial, sans-serif',
  }));

  const TableBodyCell = styled(TableCell)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    fontSize: '12.5px',
    fontFamily: 'Arial, sans-serif',
  }));

  const formatDate = (dateString, formatType) => {
    if (formatType === "ISO") {
      return moment(dateString).format("DD/MM/YYYY");
    } else if (formatType === "YYYYMMDD") {
      return moment(dateString, "YYYYMMDD").format("DD/MM/YYYY");
    }
    return dateString;
  };

  return (
    <Box sx={{ width: '100%', overflowX: 'auto' }}>
      <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
        <Table
          size="small"
          stickyHeader
          sx={{
            minWidth: '100%',
            borderCollapse: 'collapse',
            '& th, & td': {
              textAlign: 'center',
              border: '1px solid rgba(224, 224, 224, 1)',
              padding: '8px',
              fontSize: '12.5px',
              fontFamily: 'Arial, sans-serif',
            },
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
              .slice((page - 1) * rowsPerPage, page * rowsPerPage)
              .map((row, index) => (
                <StyledTableRow key={index} style={{ height: 50 }}>
                  {columns.map((column) => (
                    <TableBodyCell key={column.id}>
                      {column.id === "REG_DATE" || column.id === "POST_DTE" || column.id === "DOC_DTE"
                        ? formatDate(row[column.id], column.id === "REG_DATE" ? "ISO" : "YYYYMMDD")
                        : row[column.id]}
                    </TableBodyCell>
                  ))}
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{display:"flex", justifyContent:"flex-end"}}>
        <Stack spacing={2} sx={{ alignItems: 'center', marginY: 2 }}>
          <Pagination
            count={Math.ceil(data.length / rowsPerPage)}
            page={page}
            onChange={handlePageChange}
            shape="rounded"
          />
        </Stack>
      </div>
    </Box>
  );
};

export default TableData;
