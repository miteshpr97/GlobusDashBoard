import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, Pagination, Paper, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserCreationData } from "../../../features/userCreation/userCreationSlice";
import EmpInfo from "../EmpInfo/EmpInfo";

const columns = [
  { id: "EMP_CD", label: "EMP_CD", minWidth: 70 },
  { id: "EMP_NM", label: "EMP Name", minWidth: 120 },
];

const EmpList = () => {
  const [page, setPage] = useState(1);
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

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleRowClick = (row) => {
    setSelectedUser(row);
  };

  const UserListWidth = 270;

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        background: "#dddddd",
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          width: `${UserListWidth}px`,
          height: "100%",
          background: "white",
          overflowX: "auto",
          padding: "10px",
          minHeight:"100%"
        }}
      >
        <TableContainer component={Paper} sx={{ width: "100%", minHeight: 740 }}>
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
                .slice((page - 1) * rowsPerPage, page * rowsPerPage)
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
        <Stack spacing={2} sx={{ marginTop: 2, alignItems: "center" }}>
          <Pagination
            count={Math.ceil(userCreation.data.length / rowsPerPage)}
            page={page}
            onChange={handlePageChange}
            shape="rounded"
          />
        </Stack>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          height: "100%",
          background: "white",
          overflowX: "auto",
          width: `calc(100% - ${UserListWidth}px)`,
          padding: "10px",
        }}
      >
        <EmpInfo user={selectedUser} />
      </Box>
    </Box>
  );
};

export default EmpList;






