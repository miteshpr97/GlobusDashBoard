import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, Paper, TablePagination } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserCreationData } from "../../../features/userCreation/userCreationSlice";
import EmpInfo from "../EmpInfo/EmpInfo";

const columns = [
  { id: "EMP_CD", label: "EMP_CD", minWidth: 70 },
  { id: "EMP_NM", label: "EMP Name", minWidth: 120 },
];

const EmpList = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedUser, setSelectedUser] = useState(null);

  const dispatch = useDispatch();
  const userCreation = useSelector((state) => state.userCreation);

  useEffect(() => {
    dispatch(fetchUserCreationData());
  }, [dispatch]);

  if (userCreation.status === "loading") {
    return <div>Loading...</div>;
  }

  if (userCreation.status === "failed") {
    return <div>Error: {userCreation.error}</div>;
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  const handleRowClick = (row) => {
    setSelectedUser(row);
  };
  return (
    <Box
      sx={{
        width: "100%",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        background: "#dddddd",
      }}
    >
      <Box
        sx={{
          width: '22vw',
          height: "100%",
          background: "white",
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
                {userCreation.data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.EMP_CD}
                        onClick={() => handleRowClick(row)}
                        style={{ cursor: "pointer" }}
                      >
                        {columns.map((column) => {
                          let value;
                          if (column.id === "EMP_NM") {
                            value = `${row.EMP_FNM} ${row.EMP_LNM}`;
                          } else {
                            value = row[column.id];
                          }
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
            count={userCreation.data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
      <Box
    sx={{
      width: "56vw",
      height: "100%",
      background: "white",
      padding: "10px",
      marginLeft:"10px"
    }}
  >
      <EmpInfo user={selectedUser}/>
      </Box >
    </Box>
  );
};

export default EmpList;














