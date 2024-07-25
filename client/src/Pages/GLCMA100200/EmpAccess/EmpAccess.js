
// import React, { useState, useEffect } from 'react';
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
// } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import axios from 'axios';

// const EmpAccess = () => {
//   const [data, setData] = useState([]);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [permissions, setPermissions] = useState({});

//   const [userAccessData, setUserAccessData] = useState(null);

//   console.log(userAccessData, "data acess");

//   useEffect(() => {
//     // Fetch data from the API
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('api/GLCMA100200/');
//         setData(response.data);
//         const initialState = response.data.reduce((acc, item, index) => {
//           acc[index] = {
//             PAGE_YN: "",
//             PAGE_INQUIRY: false,
//             PAGE_SAVE: false,
//             PAGE_UPDATE: false,
//             PAGE_DELETE: false,
//             PAGE_APP_Y1: false,
//             PAGE_APP_Y2: false,
//             PAGE_APP_Y3: false,
//             PAGE_APP_Y4: false,
//             PAGE_APP_Y5: false,
//             PAGE_APP_Y6: false,
//             PAGE_PRINT: false,
//             PAGE_EXCEL: false,
//           };
//           return acc;
//         }, {});
//         setPermissions(initialState);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);


//   useEffect(() => {
//     const fetchUserAccessData = async () => {
//       try {
//         const response = await axios.get('api/GLCMA100200/GLA100001');
//         const data = response.data;
//         setUserAccessData(data); // Set the fetched data to state
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchUserAccessData();
//   }, []); 

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
//     '&:nth-of-type(odd)': {
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
//     <Box >
//       <TableContainer component={Paper}>
//         <Table size="sm"
//           stickyHeader>
//           <TableHead>
//             <TableRow>
//               <TableCell>Module</TableCell>
//               <TableCell>ID</TableCell>
//               <TableCell>Menu</TableCell>
//               <TableCell>Page ID</TableCell>
//               <TableCell>Name</TableCell>
//               <TableCell>Yes/No</TableCell>
//               <TableCell>Inquiry</TableCell>
//               <TableCell>Save</TableCell>
//               <TableCell>Update</TableCell>
//               <TableCell>Delete</TableCell>
//               <TableCell>App Y1</TableCell>
//               <TableCell>App Y2</TableCell>
//               <TableCell>App Y3</TableCell>
//               <TableCell>App Y4</TableCell>
//               <TableCell>App Y5</TableCell>
//               <TableCell>App Y6</TableCell>
//               <TableCell>Print</TableCell>
//               <TableCell>Excel</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
//               const actualIndex = page * rowsPerPage + index; // Get the actual index in the data array
//               return (
//                 <StyledTableRow key={actualIndex}>
//                   <TableCell>{row.MODULE_CD}</TableCell>
//                   <TableCell>{row.MENU_CD}</TableCell>
//                   <TableCell>{row.MENU_NM}</TableCell>
//                   <TableCell>{row.PAGE_ID}</TableCell>
//                   <TableCell>{row.PAGE_NM}</TableCell>
//                   {['PAGE_YN', 'PAGE_INQUIRY', 'PAGE_SAVE', 'PAGE_UPDATE', 'PAGE_DELETE', 'PAGE_APP_Y1', 'PAGE_APP_Y2', 'PAGE_APP_Y3', 'PAGE_APP_Y4', 'PAGE_APP_Y5', 'PAGE_APP_Y6', 'PAGE_PRINT', 'PAGE_EXCEL'].map((field) => (
//                     <TableCell align="center" key={field}>
//                       <Checkbox
//                         checked={permissions[actualIndex] ? permissions[actualIndex][field] : false}
//                         onChange={() => handleCheckboxChange(actualIndex, field)}
//                       />
//                     </TableCell>
//                   ))}
//                 </StyledTableRow>
//               );
//             })}
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

const EmpAccess = ({ empCd }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [permissions, setPermissions] = useState({});
  const [userAccessData, setUserAccessData] = useState(null);

  console.log(userAccessData, "data access");


  console.log(empCd,"user data");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('api/GLCMA100200/');
        setData(response.data);

        const userAccessResponse = await axios.get(`api/GLCMA100200/${empCd}`);
        const userAccessData = userAccessResponse.data;
        setUserAccessData(userAccessData);

        const initialState = response.data.reduce((acc, item, index) => {
          const userAccessItem = userAccessData.find(ua => ua.PAGE_CD === item.PAGE_CD);
          acc[index] = {
            PAGE_YN: userAccessItem ? userAccessItem.PAGE_YN === 'Y' : false,
            PAGE_INQUIRY: userAccessItem ? userAccessItem.PAGE_INQUIRY === 'Y' : false,
            PAGE_SAVE: userAccessItem ? userAccessItem.PAGE_SAVE === 'Y' : false,
            PAGE_UPDATE: userAccessItem ? userAccessItem.PAGE_UPDATE === 'Y' : false,
            PAGE_DELETE: userAccessItem ? userAccessItem.PAGE_DELETE === 'Y' : false,
            PAGE_APP_Y1: userAccessItem ? userAccessItem.PAGE_APP_Y1 === 'Y' : false,
            PAGE_APP_Y2: userAccessItem ? userAccessItem.PAGE_APP_Y2 === 'Y' : false,
            PAGE_APP_Y3: userAccessItem ? userAccessItem.PAGE_APP_Y3 === 'Y' : false,
            PAGE_APP_Y4: userAccessItem ? userAccessItem.PAGE_APP_Y4 === 'Y' : false,
            PAGE_APP_Y5: userAccessItem ? userAccessItem.PAGE_APP_Y5 === 'Y' : false,
            PAGE_APP_Y6: userAccessItem ? userAccessItem.PAGE_APP_Y6 === 'Y' : false,
            PAGE_PRINT: userAccessItem ? userAccessItem.PAGE_PRINT === 'Y' : false,
            PAGE_EXCEL: userAccessItem ? userAccessItem.PAGE_EXCEL === 'Y' : false,
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



  return (
    <Box>
      <TableContainer component={Paper}>
        <Table size="sm" stickyHeader>
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

