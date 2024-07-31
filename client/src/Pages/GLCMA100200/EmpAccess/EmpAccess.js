// import React, { useState, useEffect } from "react";

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Checkbox,
//   Box,
//   TablePagination,
// } from "@mui/material";
// import { styled } from "@mui/material/styles";
// //import axios from 'axios';
// import { _getAll_WithoutToken } from "../../../CommonUtilAPI/GLApiClient";

// const EmpAccess = ({ USER_CD }) => {
//   const [data, setData] = useState([]);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [permissions, setPermissions] = useState({});
//   const [userAccessData, setUserAccessData] = useState(null);

//   console.log(userAccessData);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await _getAll_WithoutToken("api/GLCMA100200/"); // await axios.get('api/GLCMA100200/');
//         setData(response.data);

//         if (USER_CD) {
//           const userAccessResponse = await _getAll_WithoutToken(
//             `api/GLCMA100200/${USER_CD}`
//           ); //axios.get(
//           //  `api/GLCMA100200/${USER_CD}`
//           // );
//           const userAccessData = userAccessResponse.data;
//           setUserAccessData(userAccessData);

//           const initialState = response.data.reduce((acc, item, index) => {
//             const userAccessItem = userAccessData.find(
//               (ua) => ua.PAGE_CD === item.PAGE_CD
//             );
//             acc[index] = {
//               PAGE_YN: userAccessItem ? userAccessItem.PAGE_YN === "Y" : false,
//               PAGE_INQUIRY: userAccessItem
//                 ? userAccessItem.PAGE_INQUIRY === "Y"
//                 : false,
//               PAGE_SAVE: userAccessItem
//                 ? userAccessItem.PAGE_SAVE === "Y"
//                 : false,
//               PAGE_UPDATE: userAccessItem
//                 ? userAccessItem.PAGE_UPDATE === "Y"
//                 : false,
//               PAGE_DELETE: userAccessItem
//                 ? userAccessItem.PAGE_DELETE === "Y"
//                 : false,
//               PAGE_APP_Y1: userAccessItem
//                 ? userAccessItem.PAGE_APP_Y1 === "Y"
//                 : false,
//               PAGE_APP_Y2: userAccessItem
//                 ? userAccessItem.PAGE_APP_Y2 === "Y"
//                 : false,
//               PAGE_APP_Y3: userAccessItem
//                 ? userAccessItem.PAGE_APP_Y3 === "Y"
//                 : false,
//               PAGE_APP_Y4: userAccessItem
//                 ? userAccessItem.PAGE_APP_Y4 === "Y"
//                 : false,
//               PAGE_APP_Y5: userAccessItem
//                 ? userAccessItem.PAGE_APP_Y5 === "Y"
//                 : false,
//               PAGE_APP_Y6: userAccessItem
//                 ? userAccessItem.PAGE_APP_Y6 === "Y"
//                 : false,
//               PAGE_PRINT: userAccessItem
//                 ? userAccessItem.PAGE_PRINT === "Y"
//                 : false,
//               PAGE_EXCEL: userAccessItem
//                 ? userAccessItem.PAGE_EXCEL === "Y"
//                 : false,
//             };
//             return acc;
//           }, {});

//           setPermissions(initialState);
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [USER_CD]);

//   const handleCheckboxChange = (index, field) => {
//     setPermissions((prevState) => ({
//       ...prevState,
//       [index]: {
//         ...prevState[index],
//         [field]: !prevState[index][field],
//       },
//     }));
//   };

//   const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     "&:nth-of-type(odd)": {
//       backgroundColor: theme.palette.action.hover,
//     },
//   }));

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   return (
//     <Box>
//       <TableContainer
//         component={Paper}
//         style={{
//           maxHeight: 440,
//           overflow: "auto",
//           border: "1px solid #ddd",
//         }}
//       >
//         <Table
//           size="sm"
//           stickyHeader
//           style={{
//             minWidth: 650,
//             borderCollapse: "collapse",
//           }}
//         >
//           <TableHead>
//             <TableRow style={{ backgroundColor: "#f5f5f5" }}>
//               <TableCell style={{ fontWeight: "bold" }}>Module</TableCell>
//               <TableCell style={{ fontWeight: "bold" }}>ID</TableCell>
//               <TableCell style={{ fontWeight: "bold" }}>Menu</TableCell>
//               <TableCell style={{ fontWeight: "bold" }}>Page ID</TableCell>
//               <TableCell style={{ fontWeight: "bold" }}>Name</TableCell>
//               <TableCell style={{ fontWeight: "bold" }}>Y/N</TableCell>
//               <TableCell style={{ fontWeight: "bold" }}>Inquiry</TableCell>
//               <TableCell style={{ fontWeight: "bold" }}>Save</TableCell>
//               <TableCell style={{ fontWeight: "bold" }}>Update</TableCell>
//               <TableCell style={{ fontWeight: "bold" }}>Delete</TableCell>
//               <TableCell style={{ fontWeight: "bold" }}>App Y1</TableCell>
//               <TableCell style={{ fontWeight: "bold" }}>App Y2</TableCell>
//               <TableCell style={{ fontWeight: "bold" }}>App Y3</TableCell>
//               <TableCell style={{ fontWeight: "bold" }}>App Y4</TableCell>
//               <TableCell style={{ fontWeight: "bold" }}>App Y5</TableCell>
//               <TableCell style={{ fontWeight: "bold" }}>App Y6</TableCell>
//               <TableCell style={{ fontWeight: "bold" }}>Print</TableCell>
//               <TableCell style={{ fontWeight: "bold" }}>Excel</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {data
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((row, index) => {
//                 const actualIndex = page * rowsPerPage + index; // Get the actual index in the data array
//                 return (
//                   <StyledTableRow
//                     key={actualIndex}
//                     style={{ borderBottom: "1px solid #ddd" }}
//                   >
//                     <TableCell>{row.MODULE_CD}</TableCell>
//                     <TableCell>{row.MENU_CD}</TableCell>
//                     <TableCell>{row.MENU_NM}</TableCell>
//                     <TableCell>{row.PAGE_ID}</TableCell>
//                     <TableCell>{row.PAGE_NM}</TableCell>
//                     {[
//                       "PAGE_YN",
//                       "PAGE_INQUIRY",
//                       "PAGE_SAVE",
//                       "PAGE_UPDATE",
//                       "PAGE_DELETE",
//                       "PAGE_APP_Y1",
//                       "PAGE_APP_Y2",
//                       "PAGE_APP_Y3",
//                       "PAGE_APP_Y4",
//                       "PAGE_APP_Y5",
//                       "PAGE_APP_Y6",
//                       "PAGE_PRINT",
//                       "PAGE_EXCEL",
//                     ].map((field) => (
//                       <TableCell align="center" key={field}>
//                         <Checkbox
//                           checked={
//                             permissions[actualIndex]
//                               ? permissions[actualIndex][field]
//                               : false
//                           }
//                           onChange={() =>
//                             handleCheckboxChange(actualIndex, field)
//                           }
//                         />
//                       </TableCell>
//                     ))}
//                   </StyledTableRow>
//                 );
//               })}
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

// export default EmpAccess;









// import React, { useState, useEffect } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Checkbox,
//   Box,
//   TablePagination,
// } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import { _getAll_WithoutToken, _update_WithoutToken } from "../../../CommonUtilAPI/GLApiClient";

// const EmpAccess = ({ USER_CD }) => {
//   const [data, setData] = useState([]);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [permissions, setPermissions] = useState({});
//   const [userAccessData, setUserAccessData] = useState(null);

//   console.log(userAccessData);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await _getAll_WithoutToken("api/GLCMA100200/");
//         setData(response.data);

//         if (USER_CD) {
//           const userAccessResponse = await _getAll_WithoutToken(
//             `api/GLCMA100200/${USER_CD}`
//           );
//           const userAccessData = userAccessResponse.data;
//           setUserAccessData(userAccessData);

//           const initialState = response.data.reduce((acc, item, index) => {
//             const userAccessItem = userAccessData.find(
//               (ua) => ua.PAGE_CD === item.PAGE_CD
//             );
//             acc[index] = {
//               PAGE_YN: userAccessItem ? userAccessItem.PAGE_YN === "Y" : false,
//               PAGE_INQUIRY: userAccessItem
//                 ? userAccessItem.PAGE_INQUIRY === "Y"
//                 : false,
//               PAGE_SAVE: userAccessItem
//                 ? userAccessItem.PAGE_SAVE === "Y"
//                 : false,
//               PAGE_UPDATE: userAccessItem
//                 ? userAccessItem.PAGE_UPDATE === "Y"
//                 : false,
//               PAGE_DELETE: userAccessItem
//                 ? userAccessItem.PAGE_DELETE === "Y"
//                 : false,
//               PAGE_APP_Y1: userAccessItem
//                 ? userAccessItem.PAGE_APP_Y1 === "Y"
//                 : false,
//               PAGE_APP_Y2: userAccessItem
//                 ? userAccessItem.PAGE_APP_Y2 === "Y"
//                 : false,
//               PAGE_APP_Y3: userAccessItem
//                 ? userAccessItem.PAGE_APP_Y3 === "Y"
//                 : false,
//               PAGE_APP_Y4: userAccessItem
//                 ? userAccessItem.PAGE_APP_Y4 === "Y"
//                 : false,
//               PAGE_APP_Y5: userAccessItem
//                 ? userAccessItem.PAGE_APP_Y5 === "Y"
//                 : false,
//               PAGE_APP_Y6: userAccessItem
//                 ? userAccessItem.PAGE_APP_Y6 === "Y"
//                 : false,
//               PAGE_PRINT: userAccessItem
//                 ? userAccessItem.PAGE_PRINT === "Y"
//                 : false,
//               PAGE_EXCEL: userAccessItem
//                 ? userAccessItem.PAGE_EXCEL === "Y"
//                 : false,
//             };
//             return acc;
//           }, {});

//           setPermissions(initialState);
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [USER_CD]);

//   const updateUserAccess = async (index, field, value) => {
//     try {
//       const updatedPermissions = {
//         ...permissions[index],
//         [field]: value,
//       };

//       await _update_WithoutToken(`api/GLCMA100200/Update/${USER_CD}`, {
//         ...data[index],
//         USER_CD,
//         [field]: value ? "Y" : "N",
//       });

//       setPermissions((prevState) => ({
//         ...prevState,
//         [index]: updatedPermissions,
//       }));
//     } catch (error) {
//       console.error("Error updating user access:", error);
//     }
//   };

//   const handleCheckboxChange = (index, field) => {
//     const newValue = !permissions[index][field];
//     updateUserAccess(index, field, newValue);
//   };

//   const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     "&:nth-of-type(odd)": {
//       backgroundColor: theme.palette.action.hover,
//     },
//   }));

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   return (
//     <Box>
//       <TableContainer
//         component={Paper}
//         style={{
//           maxHeight: 440,
//           overflow: "auto",
//           border: "1px solid #ddd",
//         }}
//       >
//         <Table
//           size="sm"
//           stickyHeader
//           style={{
//             minWidth: 650,
//             borderCollapse: "collapse",
//           }}
//         >
//           <TableHead>
//             <TableRow style={{ backgroundColor: "#f5f5f5" }}>
//               <TableCell style={{ fontWeight: "bold" }}>Module</TableCell>
//               <TableCell style={{ fontWeight: "bold" }}>ID</TableCell>
//               <TableCell style={{ fontWeight: "bold" }}>Menu</TableCell>
//               <TableCell style={{ fontWeight: "bold" }}>Page ID</TableCell>
//               <TableCell style={{ fontWeight: "bold" }}>Name</TableCell>
//               <TableCell style={{ fontWeight: "bold" }}>Y/N</TableCell>
//               <TableCell style={{ fontWeight: "bold" }}>Inquiry</TableCell>
//               <TableCell style={{ fontWeight: "bold" }}>Save</TableCell>
//               <TableCell style={{ fontWeight: "bold" }}>Update</TableCell>
//               <TableCell style={{ fontWeight: "bold" }}>Delete</TableCell>
//               <TableCell style={{ fontWeight: "bold" }}>App Y1</TableCell>
//               <TableCell style={{ fontWeight: "bold" }}>App Y2</TableCell>
//               <TableCell style={{ fontWeight: "bold" }}>App Y3</TableCell>
//               <TableCell style={{ fontWeight: "bold" }}>App Y4</TableCell>
//               <TableCell style={{ fontWeight: "bold" }}>App Y5</TableCell>
//               <TableCell style={{ fontWeight: "bold" }}>App Y6</TableCell>
//               <TableCell style={{ fontWeight: "bold" }}>Print</TableCell>
//               <TableCell style={{ fontWeight: "bold" }}>Excel</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {data
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((row, index) => {
//                 const actualIndex = page * rowsPerPage + index;
//                 return (
//                   <StyledTableRow
//                     key={actualIndex}
//                     style={{ borderBottom: "1px solid #ddd" }}
//                   >
//                     <TableCell>{row.MODULE_CD}</TableCell>
//                     <TableCell>{row.MENU_CD}</TableCell>
//                     <TableCell>{row.MENU_NM}</TableCell>
//                     <TableCell>{row.PAGE_ID}</TableCell>
//                     <TableCell>{row.PAGE_NM}</TableCell>
//                     {[
//                       "PAGE_YN",
//                       "PAGE_INQUIRY",
//                       "PAGE_SAVE",
//                       "PAGE_UPDATE",
//                       "PAGE_DELETE",
//                       "PAGE_APP_Y1",
//                       "PAGE_APP_Y2",
//                       "PAGE_APP_Y3",
//                       "PAGE_APP_Y4",
//                       "PAGE_APP_Y5",
//                       "PAGE_APP_Y6",
//                       "PAGE_PRINT",
//                       "PAGE_EXCEL",
//                     ].map((field) => (
//                       <TableCell align="center" key={field}>
//                         <Checkbox
//                           checked={
//                             permissions[actualIndex]
//                               ? permissions[actualIndex][field]
//                               : false
//                           }
//                           onChange={() =>
//                             handleCheckboxChange(actualIndex, field)
//                           }
//                         />
//                       </TableCell>
//                     ))}
//                   </StyledTableRow>
//                 );
//               })}
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

// export default EmpAccess;

import React, { useState, useEffect } from "react";
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
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { _getAll_WithoutToken, _update_WithoutToken } from "../../../CommonUtilAPI/GLApiClient";

const EmpAccess = ({ USER_CD }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [permissions, setPermissions] = useState({});
  const [userAccessData, setUserAccessData] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await _getAll_WithoutToken("api/GLCMA100200/");
        setData(response.data);

        if (USER_CD) {
          const userAccessResponse = await _getAll_WithoutToken(
            `api/GLCMA100200/${USER_CD}`
          );
          const userAccessData = userAccessResponse.data;
          setUserAccessData(userAccessData);

          const initialState = response.data.reduce((acc, item, index) => {
            const userAccessItem = userAccessData.find(
              (ua) => ua.PAGE_CD === item.PAGE_CD
            );
            acc[index] = {
              PAGE_YN: userAccessItem ? userAccessItem.PAGE_YN === "Y" : false,
              PAGE_INQUIRY: userAccessItem
                ? userAccessItem.PAGE_INQUIRY === "Y"
                : false,
              PAGE_SAVE: userAccessItem
                ? userAccessItem.PAGE_SAVE === "Y"
                : false,
              PAGE_UPDATE: userAccessItem
                ? userAccessItem.PAGE_UPDATE === "Y"
                : false,
              PAGE_DELETE: userAccessItem
                ? userAccessItem.PAGE_DELETE === "Y"
                : false,
              PAGE_APP_Y1: userAccessItem
                ? userAccessItem.PAGE_APP_Y1 === "Y"
                : false,
              PAGE_APP_Y2: userAccessItem
                ? userAccessItem.PAGE_APP_Y2 === "Y"
                : false,
              PAGE_APP_Y3: userAccessItem
                ? userAccessItem.PAGE_APP_Y3 === "Y"
                : false,
              PAGE_APP_Y4: userAccessItem
                ? userAccessItem.PAGE_APP_Y4 === "Y"
                : false,
              PAGE_APP_Y5: userAccessItem
                ? userAccessItem.PAGE_APP_Y5 === "Y"
                : false,
              PAGE_APP_Y6: userAccessItem
                ? userAccessItem.PAGE_APP_Y6 === "Y"
                : false,
              PAGE_PRINT: userAccessItem
                ? userAccessItem.PAGE_PRINT === "Y"
                : false,
              PAGE_EXCEL: userAccessItem
                ? userAccessItem.PAGE_EXCEL === "Y"
                : false,
            };
            return acc;
          }, {});

          setPermissions(initialState);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [USER_CD]);

  const updateUserAccess = async () => {
    const userConfirmed = window.confirm("Are you sure you want to update the user access?");
  
    if (!userConfirmed) {
      return; // If the user cancels, exit the function
    }
  
    try {
      const updates = Object.keys(permissions).map((index) => {
        const updateData = {
          ...data[index],
          USER_CD,
          PAGE_YN: permissions[index].PAGE_YN ? "Y" : "N",
          PAGE_INQUIRY: permissions[index].PAGE_INQUIRY ? "Y" : "N",
          PAGE_SAVE: permissions[index].PAGE_SAVE ? "Y" : "N",
          PAGE_UPDATE: permissions[index].PAGE_UPDATE ? "Y" : "N",
          PAGE_DELETE: permissions[index].PAGE_DELETE ? "Y" : "N",
          PAGE_APP_Y1: permissions[index].PAGE_APP_Y1 ? "Y" : "N",
          PAGE_APP_Y2: permissions[index].PAGE_APP_Y2 ? "Y" : "N",
          PAGE_APP_Y3: permissions[index].PAGE_APP_Y3 ? "Y" : "N",
          PAGE_APP_Y4: permissions[index].PAGE_APP_Y4 ? "Y" : "N",
          PAGE_APP_Y5: permissions[index].PAGE_APP_Y5 ? "Y" : "N",
          PAGE_APP_Y6: permissions[index].PAGE_APP_Y6 ? "Y" : "N",
          PAGE_PRINT: permissions[index].PAGE_PRINT ? "Y" : "N",
          PAGE_EXCEL: permissions[index].PAGE_EXCEL ? "Y" : "N",
        };
  
        return _update_WithoutToken(`api/GLCMA100200/Update/${USER_CD}`, updateData);
      });
  
      await Promise.all(updates);
      setOpenSnackbar(true); // Show success message
    } catch (error) {
      console.error("Error updating user access:", error);
    }
  };
  

  const handleCheckboxChange = (index, field) => {
    setPermissions((prevState) => ({
      ...prevState,
      [index]: {
        ...prevState[index],
        [field]: !prevState[index][field],
      },
    }));
  };

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  }));

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box>
      <TableContainer
        component={Paper}
        style={{
          maxHeight: 440,
          overflow: "auto",
          border: "1px solid #ddd",
        }}
      >
        <Table
          size="sm"
          stickyHeader
          style={{
            minWidth: 650,
            borderCollapse: "collapse",
          }}
        >
          <TableHead>
            <TableRow style={{ backgroundColor: "#f5f5f5" }}>
              <TableCell style={{ fontWeight: "bold" }}>Module</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>ID</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Menu</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Page ID</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Name</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Y/N</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Inquiry</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Save</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Update</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Delete</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>App Y1</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>App Y2</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>App Y3</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>App Y4</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>App Y5</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>App Y6</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Print</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Excel</TableCell>
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
                    <TableCell>{row.MODULE_CD}</TableCell>
                    <TableCell>{row.MENU_CD}</TableCell>
                    <TableCell>{row.MENU_NM}</TableCell>
                    <TableCell>{row.PAGE_ID}</TableCell>
                    <TableCell>{row.PAGE_NM}</TableCell>
                    {[
                      "PAGE_YN",
                      "PAGE_INQUIRY",
                      "PAGE_SAVE",
                      "PAGE_UPDATE",
                      "PAGE_DELETE",
                      "PAGE_APP_Y1",
                      "PAGE_APP_Y2",
                      "PAGE_APP_Y3",
                      "PAGE_APP_Y4",
                      "PAGE_APP_Y5",
                      "PAGE_APP_Y6",
                      "PAGE_PRINT",
                      "PAGE_EXCEL",
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

      <Box mt={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={updateUserAccess}
        >
          Save
        </Button>
      </Box>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Update successful!"
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: '100%' }}
        >
          Update successful!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default EmpAccess;
