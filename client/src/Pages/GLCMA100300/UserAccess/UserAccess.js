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
  TextField,
  Grid,
  Button,
} from "@mui/material";
import axios from "axios";

const UserAccess = ({ selectedModule }) => {
  const [moduleData, setModuleData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    const fetchModuleData = async () => {
      if (!selectedModule) return;

      try {
        const response = await axios.post("/api/GLCMA100300/data", {
          MODULE_CD: selectedModule.M_DVN,
          CODE_NO: selectedModule.CODE_NO,
        });

        if (response.status === 200 && Array.isArray(response.data)) {
          setModuleData(response.data);
        } else {
          console.error("Unexpected response data:", response.data);
        }
      } catch (error) {
        console.error("Error fetching module data:", error);
      }
    };

    fetchModuleData();
  }, [selectedModule]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleInputChange = (index, field, value) => {
    const updatedModuleData = [...moduleData];
    updatedModuleData[index][field] = value;
    setModuleData(updatedModuleData);
  };


  const handleAddNewRow = () => {
    const newRow = {
      M_DVN: selectedModule?.M_DVN || "",
      C_DVN: selectedModule?.C_DVN || "",
      CODE_NO: "",
      CODE_NM: "",
      CODE_NMH: "",
      CODE_NMA: "",
      CODE_NMO: "",
      SUB_GUN1: "",
      SUB_GUN2: "",
      SUB_GUN3: "",
      SUB_GUN4: "",
      SUB_GUN5: "",
      SORT_BY: "",
      RMKS: "",
    };

    setModuleData((prevData) => [newRow, ...prevData]);
    setPage(0);
  };

  const handleUpdate = async () => {
    const confirmUpdate = window.confirm("Are you sure you want to update the data?");

    if (confirmUpdate) {
      try {
        const response = await axios.post("/api/GLCMA100300/", moduleData);

        if (response.status === 200) {
          console.log("Data updated successfully!");
        } else {
          console.error("Failed to update data:", response.data);
        }
      } catch (error) {
        console.error("Error updating data:", error);
      }
    } else {
      console.log("Update canceled by the user.");
    }
  };


  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, moduleData.length - page * rowsPerPage);

  const textFieldStyle = { width: "100px" };
  const cellStyle = {
    fontWeight: "bold",
    padding: "12px",
    backgroundColor: "#045e84",
    color: "white",
  };
  const inputPropsReadOnly = { readOnly: true };

  return (

    <>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>

        <Button
          variant="contained"
          color="primary"
          onClick={handleAddNewRow}
          style={{ marginBottom: "16px" }}
        >
          Add New Row
        </Button>
      </div>






      <TableContainer component={Paper} sx={{ width: "100%", maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow sx={{ background: "blue" }}>
              <TableCell sx={cellStyle}>Module</TableCell>
              <TableCell sx={cellStyle}>Code DVN</TableCell>
              <TableCell sx={cellStyle}>Code NO</TableCell>
              <TableCell sx={cellStyle}>Code NM</TableCell>
              <TableCell sx={cellStyle}>Code NMH</TableCell>
              <TableCell sx={cellStyle}>Code NMA</TableCell>
              <TableCell sx={cellStyle}>Code NMO</TableCell>
              <TableCell sx={cellStyle}>SUB_GUN 1</TableCell>
              <TableCell sx={cellStyle}>SUB_GUN 2</TableCell>
              <TableCell sx={cellStyle}>SUB_GUN 3</TableCell>
              <TableCell sx={cellStyle}>SUB_GUN 4</TableCell>
              <TableCell sx={cellStyle}>SUB_GUN 5</TableCell>
              <TableCell sx={cellStyle}>SORT_BY</TableCell>
              <TableCell sx={cellStyle}>RMKS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {moduleData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((module, index) => (
                <TableRow key={index}>
                  {[
                    { field: "M_DVN", readOnly: true },
                    { field: "C_DVN", readOnly: true },
                    { field: "CODE_NO", readOnly: true },
                    { field: "CODE_NM" },
                    { field: "CODE_NMH" },
                    { field: "CODE_NMA" },
                    { field: "CODE_NMO" },
                    { field: "SUB_GUN1" },
                    { field: "SUB_GUN2" },
                    { field: "SUB_GUN3" },
                    { field: "SUB_GUN4" },
                    { field: "SUB_GUN5" },
                    { field: "ORDER_NO" },
                    { field: "SORT_BY" },
                    { field: "RMKS" },
                  ].map(({ field, readOnly }, i) => (
                    <TableCell key={i}>
                      <Grid item xs={12} style={textFieldStyle}>
                        <TextField
                          value={module[field]}
                          onChange={(e) =>
                            handleInputChange(index, field, e.target.value)
                          }
                          variant="outlined"
                          size="small"
                          fullWidth
                          inputProps={readOnly ? inputPropsReadOnly : {}}
                        />
                      </Grid>
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={14} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={moduleData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleUpdate}
        style={{ marginTop: "16px" }}
      >
        Update
      </Button>
    </>
  );
};

export default UserAccess;

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
//   TextField,
//   Grid,
// } from "@mui/material";
// import axios from "axios";

// const UserAccess = ({ selectedModule }) => {
//   const [moduleData, setModuleData] = useState([]);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);

//   useEffect(() => {
//     const fetchModuleData = async () => {
//       if (!selectedModule) return;

//       try {
//         const response = await axios.post("/api/GLCMA100300/data", {
//           MODULE_CD: selectedModule.M_DVN,
//           CODE_NO: selectedModule.CODE_NO,
//         });

//         if (response.status === 200 && Array.isArray(response.data)) {
//           setModuleData(response.data);
//         } else {
//           console.error("Unexpected response data:", response.data);
//         }
//       } catch (error) {
//         console.error("Error fetching module data:", error);
//       }
//     };

//     fetchModuleData();
//   }, [selectedModule]);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   const handleInputChange = (index, field, value) => {
//     const updatedModuleData = [...moduleData];
//     updatedModuleData[index][field] = value;
//     setModuleData(updatedModuleData);
//   };

//   const emptyRows =
//     rowsPerPage - Math.min(rowsPerPage, moduleData.length - page * rowsPerPage);

//   return (
//     <>
//       <TableContainer component={Paper} sx={{ width: "100%", maxHeight: 440 }}>
//         <Table stickyHeader aria-label="sticky table">
//           <TableHead>
//             <TableRow style={{ backgroundColor: "#f5f5f5" }}>
//               <TableCell style={{ fontWeight: "bold" }}>Module</TableCell>
//               <TableCell style={{ fontWeight: "bold" }}>Code DVN</TableCell>
//               <TableCell style={{ fontWeight: "bold" }}>Code NO</TableCell>
//               <TableCell style={{ fontWeight: "bold" }}>Code NM</TableCell>
//               <TableCell style={{ fontWeight: "bold" }}>Code NMH</TableCell>
//               <TableCell style={{ fontWeight: "bold" }}>Code NMA</TableCell>
//               <TableCell style={{ fontWeight: "bold" }}>Code NMO</TableCell>
//               <TableCell style={{ fontWeight: "bold" }}>SUB_GUN 1</TableCell>
//               <TableCell style={{ fontWeight: "bold" }}>SUB_GUN 2</TableCell>
//               <TableCell style={{ fontWeight: "bold" }}>SUB_GUN 3</TableCell>
//               <TableCell style={{ fontWeight: "bold" }}>SUB_GUN 4</TableCell>
//               <TableCell style={{ fontWeight: "bold" }}>SUB_GUN 5</TableCell>
//               <TableCell style={{ fontWeight: "bold" }}>SORT_BY</TableCell>
//               <TableCell style={{ fontWeight: "bold" }}>RMKS</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {moduleData
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((module, index) => (
//                 <TableRow key={index}>
//                   {Object.keys(module).map((field) => (
//                     <TableCell key={field}>
//                       <Grid container spacing={1}>
//                         <Grid item xs={12} style={{ width:"100px"}}>
//                           <TextField
//                             value={module[field]}
//                             onChange={(e) =>
//                               handleInputChange(index, field, e.target.value)
//                             }
//                             variant="outlined"
//                             size="small"
//                             fullWidth
//                           />
//                         </Grid>
//                       </Grid>
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               ))}
//             {emptyRows > 0 && (
//               <TableRow style={{ height: 53 * emptyRows }}>
//                 <TableCell colSpan={14} />
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[10, 25, 100]}
//         component="div"
//         count={moduleData.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </>
//   );
// };

// export default UserAccess;
