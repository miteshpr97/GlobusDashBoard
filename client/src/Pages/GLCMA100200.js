import {
  Box,
  Button,
  Grid,
  Stack,
  TablePagination,
  TextField,
} from "@mui/material";
import React from "react";
import SideBar from "../component/SideBar";
import CommonBtn from "../component/CommonComponnets/CommonBtn";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";

import IconButton from "@mui/material/IconButton";

import SearchIcon from "@mui/icons-material/Search";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ProfilePhoto from "../assets/logo/profilepic2.jpg";

const columns = [
  { id: "EMP_CD", label: "EMP_CD", minWidth: 70 },
  { id: "EMP_NM", label: "EMP_NM", minWidth: 140 },
];

function createData(EMP_CD, EMP_NM) {
  return { EMP_CD, EMP_NM };
}

const rows = [
  createData("GL001", "Asif Zia"),
  createData("GL002", "Mitesh Pradhan"),
];

const GLCMA100200 = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginTop: "55px",
        }}
      >
        <Box>
          <CommonBtn PAGE_CD="GLCMA100100" />
        </Box>
        <Box
          sx={{
            width: "100%",
            background: "#dddddd",
            marginTop: "10px",
            padding: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 300,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search"
              inputProps={{ "aria-label": "search " }}
            />

            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            background: "#dddddd",
            marginTop: "10px",
            padding: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: "25%",
              height: "100%",
              background: "white",
              padding: "10px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                background: "#f3f3f3",
              }}
            >
              <Paper sx={{ width: "100%", overflow: "hidden" }}>
                <TableContainer sx={{ maxHeight: 440, overflowX: "auto" }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        {columns.map((column) => (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={{
                              minWidth: column.minWidth,
                              fontWeight: "700",
                              padding: "10px",
                            }}
                          >
                            {column.label}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((row) => {
                          return (
                            <TableRow
                              hover
                              role="checkbox"
                              tabIndex={-1}
                              key={row.PlantCode}
                            >
                              {columns.map((column) => {
                                const value = row[column.id];
                                return (
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ padding: "10px" }}
                                  >
                                    {column.format && typeof value === "number"
                                      ? column.format(value)
                                      : value}
                                  </TableCell>
                                );
                              })}
                            </TableRow>
                          );
                        })}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[10, 25, 100]}
                  component="div"
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper>
            </Box>
          </Box>
          <Box
            sx={{
              width: "74%",
              height: "100%",
              background: "white",
              padding: "10px",
            }}
          >
            <Box
              sx={{
                width: "100%",
               
                display: "flex",
              }}
            >
              <Box
                sx={{
                  width: "65%",
                  height: "100%",
                  background: "#f3f3f3",
                  padding: "10px",
                }}
              >
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": {
                      m: 0.6,
                      width: "calc(100% - 10px)",
                      "& .MuiInputBase-root": {
                        fontSize: "0.75rem",
                      },
                      "& .MuiInputLabel-root": {
                        fontSize: "0.75rem",
                      },
                    },
                    background: "white",
                    height: "100%",
                    width: "100%",
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <Grid container>
                    <Grid item xs={6}>
                      <TextField
                        label="User ID"
                        variant="outlined"
                        name="EMP_CD"
                        required
                        fullWidth
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        label="Contact No"
                        variant="outlined"
                        name="EMP_CD"
                        required
                        fullWidth
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        label="Name"
                        variant="outlined"
                        name="EMP_CD"
                        required
                        fullWidth
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        label="Landline"
                        variant="outlined"
                        name="EMP_CD"
                        required
                        fullWidth
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        label="Department"
                        variant="outlined"
                        name="EMP_CD"
                        required
                        fullWidth
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        label="Ext"
                        variant="outlined"
                        name="EMP_CD"
                        required
                        fullWidth
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        label="Position"
                        variant="outlined"
                        name="EMP_CD"
                        required
                        fullWidth
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        label="Email"
                        variant="outlined"
                        name="EMP_CD"
                        required
                        fullWidth
                        size="small"
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Box>
              <Box
                sx={{
                  width: "35%",
                 
                  background: "#f3f3f3",
                  padding: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <img
                  src={ProfilePhoto}
                  alt="photo"
                  style={{ width: "120px", height: "120px" }}
                />
                <Box>
                  <Stack spacing={1}>
                    <Button variant="contained" sx={{ flexGrow: 1 , fontSize: "11px"}}>
                      Button
                    </Button>
                    <Button
                      variant="contained"
                      sx={{ flexGrow: 1, fontSize: "10px" }}
                      color="success"
                    >
                      Password reset
                    </Button>
                    <Button
                      variant="contained"
                      sx={{ flexGrow: 1 , fontSize: "11px"}}
                      color="error"
                    >
                      Block
                    </Button>
                    <Button
                      variant="contained"
                      sx={{ flexGrow: 1 , fontSize: "11px"}}
                      color="success"
                    >
                      Activate
                    </Button>
                  </Stack>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "67%",
                background: "grey",
                padding: "10px",
                marginTop: "10px",
              }}
            >
                Access area
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GLCMA100200;
