import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Paper,
  InputBase,
  IconButton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SideBar from "../../component/SideBar";
import CommonBtn from "../../component/CommonComponnets/CommonBtn";
import SearchIcon from "@mui/icons-material/Search";
import { fetchUserCreationData, createUserData } from "../../features/userCreation/userCreationSlice";
import { useDispatch, useSelector } from "react-redux";
import CreateUser from "./CreateUser/CreateUser";

const columns = [
  { id: "EMP_CD", label: "EMP_CD", minWidth: 70 },
  { id: "EMP_NM", label: "EMP Name", minWidth: 120 },
];

const GLCMA100100 = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [formErrors, setFormErrors] = useState({});

  const sidebarWidth = isSidebarOpen ? 200 : 0;
  const UserListWidth = 270;

  const [userData, setUserData] = useState({
    EMP_CD: "",
    EMP_FNM: "",
    EMP_SNM: "",
    EMP_MNM: "",
    EMP_LNM: "",
    POS_CD: "",
    DEPT_CD: "",
    EMAIL: "",
    EMAIL_PER: "",
    MOB_NO_01: "",
    MOB_PER_01: "",
    MOB_NO_02: "",
    MOB_PER_02: "",
    EMP_TP: "",
    REF_NO: "",
    STATUS: "",
    DATE_JOIN: "",
    DATE_BIRTH: "",
    GENDER: "",
    RELIGION: "",
    ADD_01: "",
    ADD_STATE: "",
    ADD_LANDMARK: "",
    ADD_CITY: "",
    ADD_PIN: "",
    PAN_CARD: "",
    NATION_ID: "",
    REG_BY: "",
    REG_DATE: "",
    UPD_BY: null,
    UPD_DATE: null,
  });

  const userCreation = useSelector((state) => state.userCreation);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const errors = {};
    if (!userData.EMP_FNM) errors.EMP_FNM = "First Name is required";
    if (!userData.EMP_SNM) errors.EMP_SNM = "Surname is required";
    if (!userData.EMP_LNM) errors.EMP_LNM = "Last Name is required";
    if (!userData.POS_CD) errors.POS_CD = "Position Code is required";
    if (!userData.DEPT_CD) errors.DEPT_CD = "Department Code is required";
    if (!userData.EMAIL) errors.EMAIL = "Email is required";
    if (!userData.EMAIL_PER) errors.EMAIL_PER = "Personal Email is required";
    if (!userData.MOB_NO_01) errors.MOB_NO_01 = "Mobile Number 1 is required";
    if (!userData.EMP_TP) errors.EMP_TP = "Employee Type is required";
    if (!userData.REF_NO) errors.REF_NO = "Reference Number is required";
    if (!userData.STATUS) errors.STATUS = "Status is required";
    if (!userData.DATE_JOIN) errors.DATE_JOIN = "Date of Joining is required";
    if (!userData.DATE_BIRTH) errors.DATE_BIRTH = "Date of Birth is required";
    if (!userData.GENDER) errors.GENDER = "Gender is required";
    if (!userData.RELIGION) errors.RELIGION = "Religion is required";
    if (!userData.ADD_01) errors.ADD_01 = "Address is required";
    if (!userData.ADD_CITY) errors.ADD_CITY = "City Code is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const Save_Click = (event) => {
    if (event) {
      event.preventDefault();
    }
    if (validateForm()) {
      dispatch(createUserData(userData));
      alert("data is succefully save")
      window.location.reload();
    }
  };

  const resetForm = () => {
    setUserData({
      EMP_CD: "",
      EMP_FNM: "",
      EMP_SNM: "",
      EMP_MNM: "",
      EMP_LNM: "",
      POS_CD: "",
      DEPT_CD: "",
      EMAIL: "",
      EMAIL_PER: "",
      MOB_NO_01: "",
      MOB_PER_01: "",
      MOB_NO_02: "",
      MOB_PER_02: "",
      EMP_TP: "",
      REF_NO: "",
      STATUS: "",
      DATE_JOIN: "",
      DATE_BIRTH: "",
      GENDER: "",
      RELIGION: "",
      ADD_01: "",
      ADD_STATE: "",
      ADD_LANDMARK: "",
      ADD_CITY: "",
      ADD_PIN: "",
      PAN_CARD: "",
      NATION_ID: "",
      REG_BY: "",
      REG_DATE: "",
      UPD_BY: null,
      UPD_DATE: null,
    });
  };

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

  return (
    <Box sx={{ display: "flex", width: "100vw", overflow: "hidden" }}>
    {isSidebarOpen && <SideBar sx={{ width: sidebarWidth, flexShrink: 0 }} />}
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        marginTop: "55px",
        overflowX: "hidden",
        width: `calc(100vw - ${sidebarWidth}px)`,
      }}
    >
        <Box>
          <CommonBtn PAGE_CD="GLCMA100100" SAVE_CLICK={Save_Click} />
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
          <Button
            variant="contained"
            sx={{ backgroundColor: "#003285", color: "white" }}
            onClick={resetForm}
          >
            ADD EMPLOYEE
          </Button>
        </Box>
        <Box
          sx={{
            width: "100%",
            background: "#dddddd",
            marginTop: "10px",
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
            overflowX: "hidden",
          }}
        >
          <Box
            sx={{
              width: `${UserListWidth}px`,
         
              background: "#f3f3f3",
              overflowX: "auto",
              padding: "10px",
            }}
          >
            
              <TableContainer component={Paper} sx={{ width: "100%", maxHeight: 440 }} >
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
                            key={row.EMP_CD}
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
    
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              height: "100%",
              background: "#f3f3f3",
              overflowX: "auto",
              width: `calc(100% - ${UserListWidth}px)`,
              padding: "10px",
            }}
          >
            <CreateUser
              userData={userData}
              formErrors={formErrors}
              handleInputChange={handleInputChange}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GLCMA100100;

