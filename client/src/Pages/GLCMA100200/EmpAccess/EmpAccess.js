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






import React, { useState } from 'react';
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
} from '@mui/material';
import { styled } from '@mui/material/styles';

const data = [
  { module: 'CM', id: 'CMA100', menu: 'Basic Setting', pageId: 'GLCMA100100', name: 'User Creation' },
  { module: 'CM', id: 'CMA100', menu: 'Basic Setting', pageId: 'GLCMA100200', name: 'User Access' },
  { module: 'CM', id: 'CMB100', menu: 'Common Code', pageId: 'GLCMB100100', name: 'Create Common Code' },
];

const initialState = data.reduce((acc, item, index) => {
  acc[index] = { yesNo: false, inquiry: false, save: false };
  return acc;
}, {});

const EmpAccess = () => {
  const [permissions, setPermissions] = useState(initialState);

  const handleCheckboxChange = (index, action) => {
    setPermissions((prevState) => ({
      ...prevState,
      [index]: {
        ...prevState[index],
        [action]: !prevState[index][action],
      },
    }));
  };

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  }));

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table>
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
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <StyledTableRow key={index}>
                <TableCell>{row.module}</TableCell>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.menu}</TableCell>
                <TableCell>{row.pageId}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell align="center">
                  <Checkbox
                    checked={permissions[index].yesNo}
                    onChange={() => handleCheckboxChange(index, 'yesNo')}
                  />
                </TableCell>
                <TableCell align="center">
                  <Checkbox
                    checked={permissions[index].inquiry}
                    onChange={() => handleCheckboxChange(index, 'inquiry')}
                  />
                </TableCell>
                <TableCell align="center">
                  <Checkbox
                    checked={permissions[index].save}
                    onChange={() => handleCheckboxChange(index, 'save')}
                  />
                </TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default EmpAccess;
