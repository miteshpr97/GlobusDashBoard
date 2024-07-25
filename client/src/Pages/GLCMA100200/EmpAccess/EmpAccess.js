// import React, { useState } from "react";
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
// } from "@mui/material";
// import { styled } from "@mui/material/styles";

// const EmpAccess = () => {
//   const pages = ["PAGE1", "PAGE2", "PAGE3", "PAGE4"];
//   const actions = ["EDIT", "DELETE", "DOWNLOAD", "CREATE"];

//   const initialState = pages.reduce((acc, page) => {
//     acc[page] = actions.reduce((innerAcc, action) => {
//       innerAcc[action] = false;
//       return innerAcc;
//     }, {});
//     return acc;
//   }, {});

//   const [permissions, setPermissions] = useState(initialState);

//   const handleCheckboxChange = (page, action) => {
//     setPermissions((prevState) => ({
//       ...prevState,
//       [page]: {
//         ...prevState[page],
//         [action]: !prevState[page][action],
//       },
//     }));
//   };

//   const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     "&:nth-of-type(odd)": {
//       backgroundColor: theme.palette.action.hover,
//     },
//   }));

//   return (
//     <Box>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell></TableCell>
//               {actions.map((action) => (
//                 <TableCell key={action} align="center">
//                   {action}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {pages.map((page, index) => (
//               <StyledTableRow key={page} className={`page${index + 1}`}>
//                 <TableCell component="th" scope="row">
//                   {page}
//                 </TableCell>
//                 {actions.map((action) => (
//                   <TableCell key={action} align="center">
//                     <Checkbox
//                       checked={permissions[page][action]}
//                       onChange={() => handleCheckboxChange(page, action)}
//                     />
//                   </TableCell>
//                 ))}
//               </StyledTableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Box>
//   );
// };

// export default EmpAccess;


import React, { useState, useEffect } from 'react';
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
} from '@mui/material';
import { styled } from '@mui/material/styles';
import axios from 'axios';

const EmpAccess = ({ user }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [permissions, setPermissions] = useState({});
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  console.log(userData, "userdata1241");

  useEffect(() => {
    if (!user || !user.EMP_CD) {
      setError('User data is not available.');
      setLoading(false);
      return;
    }

    // Fetch user-specific data
    const fetchUserData = async () => {
      const url = `api/GLCMA100200/${user.EMP_CD}`;
      try {
        const response = await axios.get(url);
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user]);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get('api/GLCMA100200/');
        setData(response.data);
        const initialState = response.data.reduce((acc, item, index) => {
          acc[index] = {
            PAGE_YN: false,
            PAGE_INQUIRY: false,
            PAGE_SAVE: false,
            PAGE_UPDATE: false,
            PAGE_DELETE: false,
            PAGE_APP_Y1: false,
            PAGE_APP_Y2: false,
            PAGE_APP_Y3: false,
            PAGE_APP_Y4: false,
            PAGE_APP_Y5: false,
            PAGE_APP_Y6: false,
            PAGE_PRINT: false,
            PAGE_EXCEL: false,
          };
          return acc;
        }, {});
        setPermissions(initialState);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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
    '&:nth-of-type(odd)': {
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Box >
      <TableContainer component={Paper}>
        <Table   size="sm"
  stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Module</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Menu</TableCell>
              <TableCell>Page ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Yes/No</TableCell>
              <TableCell>Inquiry</TableCell>
              <TableCell>Save</TableCell>
              <TableCell>Update</TableCell>
              <TableCell>Delete</TableCell>
              <TableCell>App Y1</TableCell>
              <TableCell>App Y2</TableCell>
              <TableCell>App Y3</TableCell>
              <TableCell>App Y4</TableCell>
              <TableCell>App Y5</TableCell>
              <TableCell>App Y6</TableCell>
              <TableCell>Print</TableCell>
              <TableCell>Excel</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
              const actualIndex = page * rowsPerPage + index; // Get the actual index in the data array
              return (
                <StyledTableRow key={actualIndex}>
                  <TableCell>{row.MODULE_CD}</TableCell>
                  <TableCell>{row.MENU_CD}</TableCell>
                  <TableCell>{row.MENU_NM}</TableCell>
                  <TableCell>{row.PAGE_ID}</TableCell>
                  <TableCell>{row.PAGE_NM}</TableCell>
                  {['PAGE_YN', 'PAGE_INQUIRY', 'PAGE_SAVE', 'PAGE_UPDATE', 'PAGE_DELETE', 'PAGE_APP_Y1', 'PAGE_APP_Y2', 'PAGE_APP_Y3', 'PAGE_APP_Y4', 'PAGE_APP_Y5', 'PAGE_APP_Y6', 'PAGE_PRINT', 'PAGE_EXCEL'].map((field) => (
                    <TableCell align="center" key={field}>
                      <Checkbox
                        checked={permissions[actualIndex] ? permissions[actualIndex][field] : false}
                        onChange={() => handleCheckboxChange(actualIndex, field)}
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
    </Box>
  );
};

export default EmpAccess;
