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
} from "@mui/material";
import { styled } from "@mui/material/styles";

const EmpAccess = () => {
  const pages = ["PAGE1", "PAGE2", "PAGE3", "PAGE4"];
  const actions = ["EDIT", "DELETE", "DOWNLOAD", "CREATE"];

  const initialState = pages.reduce((acc, page) => {
    acc[page] = actions.reduce((innerAcc, action) => {
      innerAcc[action] = false;
      return innerAcc;
    }, {});
    return acc;
  }, {});

  const [permissions, setPermissions] = useState(initialState);

  const handleCheckboxChange = (page, action) => {
    setPermissions((prevState) => ({
      ...prevState,
      [page]: {
        ...prevState[page],
        [action]: !prevState[page][action],
      },
    }));
  };

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  }));

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              {actions.map((action) => (
                <TableCell key={action} align="center">
                  {action}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {pages.map((page, index) => (
              <StyledTableRow key={page} className={`page${index + 1}`}>
                <TableCell component="th" scope="row">
                  {page}
                </TableCell>
                {actions.map((action) => (
                  <TableCell key={action} align="center">
                    <Checkbox
                      checked={permissions[page][action]}
                      onChange={() => handleCheckboxChange(page, action)}
                    />
                  </TableCell>
                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default EmpAccess;

// import React, { useState } from 'react';
// import {
//   Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox
// } from '@mui/material';
// import { styled } from '@mui/material/styles';

// const EmpAccess = () => {
//   const pages = ['PAGE1', 'PAGE2', 'PAGE3', 'PAGE4'];
//   const actions = ['EDIT', 'DELETE', 'DOWNLOAD', 'CREATE'];

//   const initialState = pages.reduce((acc, page) => {
//     acc[page] = actions.reduce((innerAcc, action) => {
//       innerAcc[action] = false;
//       return innerAcc;
//     }, {});
//     return acc;
//   }, {});

//   const [permissions, setPermissions] = useState(initialState);

//   const handleCheckboxChange = (page, action) => {
//     setPermissions(prevState => ({
//       ...prevState,
//       [page]: {
//         ...prevState[page],
//         [action]: !prevState[page][action]
//       }
//     }));
//     alert(`Checkbox clicked for ${page} - ${action}`);
//   };

//   const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.action.hover,
//     },
//     // Custom colors for each row
//     '&.page1': { backgroundColor: 'lightblue' },
//     '&.page2': { backgroundColor: 'lightpurple' },
//     '&.page3': { backgroundColor: 'lightcoral' },
//     '&.page4': { backgroundColor: 'lightyellow' },
//   }));

//   return (
//     <TableContainer component={Paper}>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell></TableCell>
//             {actions.map(action => (
//               <TableCell key={action} align="center">{action}</TableCell>
//             ))}
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {pages.map((page, index) => (
//             <StyledTableRow key={page} className={`page${index + 1}`}>
//               <TableCell component="th" scope="row">
//                 {page}
//               </TableCell>
//               {actions.map(action => (
//                 <TableCell key={action} align="center">
//                   <Checkbox
//                     checked={permissions[page][action]}
//                     onChange={() => handleCheckboxChange(page, action)}
//                   />
//                 </TableCell>
//               ))}
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default EmpAccess;
