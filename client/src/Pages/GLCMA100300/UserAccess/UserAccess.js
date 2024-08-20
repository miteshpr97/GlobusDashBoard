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


  console.log(moduleData, "data");
  

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
    setPage(0);  };

  const handleInputChange = (index, field, value) => {
    const updatedModuleData = [...moduleData];
    updatedModuleData[index][field] = value;
    setModuleData(updatedModuleData);
  };

  const handleUpdate = async () => {
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
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, moduleData.length - page * rowsPerPage);

  return (
    <>
      <TableContainer component={Paper} sx={{ width: "100%", maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow sx={{ background:"blue" }}>
              <TableCell sx={{ fontWeight: "bold", padding:"10px", background:"red" }}>Module</TableCell>
              <TableCell sx={{ fontWeight: "bold" , padding:"10px"}}>Code DVN</TableCell>
              <TableCell sx={{ fontWeight: "bold", padding:"10px" }}>Code NO</TableCell>
              <TableCell sx={{ fontWeight: "bold", padding:"10px" }}>Code NM</TableCell>
              <TableCell sx={{ fontWeight: "bold", padding:"10px" }}>Code NMH</TableCell>
              <TableCell sx={{ fontWeight: "bold" , padding:"10px"}}>Code NMA</TableCell>
              <TableCell sx={{ fontWeight: "bold", padding:"10px" }}>Code NMO</TableCell>
              <TableCell sx={{ fontWeight: "bold", padding:"10px" }}>SUB_GUN 1</TableCell>
              <TableCell sx={{ fontWeight: "bold", padding:"10px" }}>SUB_GUN 2</TableCell>
              <TableCell sx={{ fontWeight: "bold", padding:"10px" }}>SUB_GUN 3</TableCell>
              <TableCell sx={{ fontWeight: "bold" , padding:"10px"}}>SUB_GUN 4</TableCell>
              <TableCell sx={{ fontWeight: "bold", padding:"10px" }}>SUB_GUN 5</TableCell>
              <TableCell sx={{ fontWeight: "bold", padding:"10px" }}>SORT_BY</TableCell>
              <TableCell sx={{ fontWeight: "bold" , padding:"10px"}}>RMKS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {moduleData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((module, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Grid item xs={12} style={{ width: "100px" }}>
                      <TextField
                        value={module.M_DVN}
                        onChange={(e) =>
                          handleInputChange(index, "M_DVN", e.target.value)
                        }
                        variant="outlined"
                        size="small"

                        fullWidth
                        inputProps={
                          { readOnly: true, }
                        }

                      />
                    </Grid>
                  </TableCell>
                  <TableCell>
                    <Grid item xs={12} style={{ width: "100px" }}>
                      <TextField
                        value={module.C_DVN}
                        onChange={(e) =>
                          handleInputChange(index, "C_DVN", e.target.value)
                        }
                        variant="outlined"
                        size="small"
                        fullWidth
                        inputProps={
                          { readOnly: true, }
                        }
                      />
                    </Grid>
                  </TableCell>
                  <TableCell>
                    <Grid item xs={12} style={{ width: "100px" }}>
                      <TextField
                        value={module.CODE_NO}
                        onChange={(e) =>
                          handleInputChange(index, "CODE_NO", e.target.value)
                        }
                        variant="outlined"
                        size="small"
                        fullWidth
                        inputProps={
                          { readOnly: true, }
                        }
                      />
                    </Grid>
                  </TableCell>
                  <TableCell>
                    <Grid item xs={12} style={{ width: "100px" }}>
                      <TextField
                        value={module.CODE_NM}
                        onChange={(e) =>
                          handleInputChange(index, "CODE_NM", e.target.value)
                        }
                        variant="outlined"
                        size="small"
                        fullWidth
                      />
                    </Grid>
                  </TableCell>
                  <TableCell>
                    <Grid item xs={12} style={{ width: "100px" }}>
                      <TextField
                        value={module.CODE_NMH}
                        onChange={(e) =>
                          handleInputChange(index, "CODE_NMH", e.target.value)
                        }
                        variant="outlined"
                        size="small"
                        fullWidth
                      />
                    </Grid>
                  </TableCell>
                  <TableCell>
                    <Grid item xs={12} style={{ width: "100px" }}>
                      <TextField
                        value={module.CODE_NMA}
                        onChange={(e) =>
                          handleInputChange(index, "CODE_NMA", e.target.value)
                        }
                        variant="outlined"
                        size="small"
                        fullWidth
                      />
                    </Grid>
                  </TableCell>
                  <TableCell>
                    <Grid item xs={12} style={{ width: "100px" }}>
                      <TextField
                        value={module.CODE_NMO}
                        onChange={(e) =>
                          handleInputChange(index, "CODE_NMO", e.target.value)
                        }
                        variant="outlined"
                        size="small"
                        fullWidth
                      />
                    </Grid>
                  </TableCell>
                  <TableCell>
                    <Grid item xs={12} style={{ width: "100px" }}>
                      <TextField
                        value={module.SUB_GUN1}
                        onChange={(e) =>
                          handleInputChange(index, "SUB_GUN1", e.target.value)
                        }
                        variant="outlined"
                        size="small"
                        fullWidth
                      />
                    </Grid>
                  </TableCell>
                  <TableCell>
                    <Grid item xs={12} style={{ width: "100px" }}>
                      <TextField
                        value={module.SUB_GUN2}
                        onChange={(e) =>
                          handleInputChange(index, "SUB_GUN2", e.target.value)
                        }
                        variant="outlined"
                        size="small"
                        fullWidth
                      />
                    </Grid>
                  </TableCell>
                  <TableCell>
                    <Grid item xs={12} style={{ width: "100px" }}>
                      <TextField
                        value={module.SUB_GUN3}
                        onChange={(e) =>
                          handleInputChange(index, "SUB_GUN3", e.target.value)
                        }
                        variant="outlined"
                        size="small"
                        fullWidth
                      />
                    </Grid>
                  </TableCell>
                  <TableCell>
                    <Grid item xs={12} style={{ width: "100px" }}>
                      <TextField
                        value={module.SUB_GUN4}
                        onChange={(e) =>
                          handleInputChange(index, "SUB_GUN4", e.target.value)
                        }
                        variant="outlined"
                        size="small"
                        fullWidth
                      />
                    </Grid>
                  </TableCell>
                  <TableCell>
                    <Grid item xs={12} style={{ width: "100px" }}>
                      <TextField
                        value={module.SUB_GUN5}
                        onChange={(e) =>
                          handleInputChange(index, "SUB_GUN5", e.target.value)
                        }
                        variant="outlined"
                        size="small"
                        fullWidth

                      />
                    </Grid>
                  </TableCell>
                  <TableCell>
                    <Grid item xs={12} style={{ width: "100px" }}>
                      <TextField
                        value={module.ORDER_NO}
                        onChange={(e) =>
                          handleInputChange(index, "ORDER_NO", e.target.value)
                        }
                        variant="outlined"
                        size="small"
                        fullWidth
                      />
                    </Grid>
                  </TableCell>
                  <TableCell>
                    <Grid item xs={12} style={{ width: "100px" }}>
                      <TextField
                        value={module.SORT_BY}
                        onChange={(e) =>
                          handleInputChange(index, "SORT_BY", e.target.value)
                        }
                        variant="outlined"
                        size="small"
                        fullWidth
                      />
                    </Grid>
                  </TableCell>
                  <TableCell>
                    <Grid item xs={12} style={{ width: "100px" }}>
                      <TextField
                        value={module.RMKS}
                        onChange={(e) =>
                          handleInputChange(index, "RMKS", e.target.value)
                        }
                        variant="outlined"
                        size="small"
                        fullWidth
                      />
                    </Grid>
                  </TableCell>
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