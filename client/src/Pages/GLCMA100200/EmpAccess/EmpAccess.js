import React, { useState, useEffect } from "react";
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
  Button,
  Snackbar,
  Alert,
  Pagination,
  Stack,
} from "@mui/material";
import {
  _getAll_WithoutToken,
  _update_WithoutToken,
} from "../../../CommonUtilAPI/GLApiClient";

const EmpAccess = ({ USER_CD }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [permissions, setPermissions] = useState({});
  const [userAccessData, setUserAccessData] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await _getAll_WithoutToken("api/GLCMA100200/");
        setData(response.data);

        if (USER_CD) {
          const userAccessResponse = await _getAll_WithoutToken(
            `api/GLCMA100200/${USER_CD}`
          );
          const userAccessData = userAccessResponse.data;
          setUserAccessData(userAccessData);

          const initialState = response.data.reduce((acc, item, index) => {
            const userAccessItem = userAccessData.find(
              (ua) => ua.PAGE_CD === item.PAGE_CD
            );
            acc[index] = {
              PAGE_YN: userAccessItem ? userAccessItem.PAGE_YN === "Y" : false,
              PAGE_INQUIRY: userAccessItem
                ? userAccessItem.PAGE_INQUIRY === "Y"
                : false,
              PAGE_SAVE: userAccessItem
                ? userAccessItem.PAGE_SAVE === "Y"
                : false,
              PAGE_UPDATE: userAccessItem
                ? userAccessItem.PAGE_UPDATE === "Y"
                : false,
              PAGE_DELETE: userAccessItem
                ? userAccessItem.PAGE_DELETE === "Y"
                : false,
              PAGE_APP_Y1: userAccessItem
                ? userAccessItem.PAGE_APP_Y1 === "Y"
                : false,
              PAGE_APP_Y2: userAccessItem
                ? userAccessItem.PAGE_APP_Y2 === "Y"
                : false,
              PAGE_APP_Y3: userAccessItem
                ? userAccessItem.PAGE_APP_Y3 === "Y"
                : false,
              PAGE_APP_Y4: userAccessItem
                ? userAccessItem.PAGE_APP_Y4 === "Y"
                : false,
              PAGE_APP_Y5: userAccessItem
                ? userAccessItem.PAGE_APP_Y5 === "Y"
                : false,
              PAGE_APP_Y6: userAccessItem
                ? userAccessItem.PAGE_APP_Y6 === "Y"
                : false,
              PAGE_PRINT: userAccessItem
                ? userAccessItem.PAGE_PRINT === "Y"
                : false,
              PAGE_EXCEL: userAccessItem
                ? userAccessItem.PAGE_EXCEL === "Y"
                : false,
            };
            return acc;
          }, {});

          setPermissions(initialState);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [USER_CD]);

  const updateUserAccess = async () => {
    const userConfirmed = window.confirm(
      "Are you sure you want to update the user access?"
    );

    if (!userConfirmed) {
      return;
    }

    try {
      const updates = Object.keys(permissions).map((index) => {
        const updateData = {
          ...data[index],
          USER_CD,
          PAGE_YN: permissions[index].PAGE_YN ? "Y" : "N",
          PAGE_INQUIRY: permissions[index].PAGE_INQUIRY ? "Y" : "N",
          PAGE_SAVE: permissions[index].PAGE_SAVE ? "Y" : "N",
          PAGE_UPDATE: permissions[index].PAGE_UPDATE ? "Y" : "N",
          PAGE_DELETE: permissions[index].PAGE_DELETE ? "Y" : "N",
          PAGE_APP_Y1: permissions[index].PAGE_APP_Y1 ? "Y" : "N",
          PAGE_APP_Y2: permissions[index].PAGE_APP_Y2 ? "Y" : "N",
          PAGE_APP_Y3: permissions[index].PAGE_APP_Y3 ? "Y" : "N",
          PAGE_APP_Y4: permissions[index].PAGE_APP_Y4 ? "Y" : "N",
          PAGE_APP_Y5: permissions[index].PAGE_APP_Y5 ? "Y" : "N",
          PAGE_APP_Y6: permissions[index].PAGE_APP_Y6 ? "Y" : "N",
          PAGE_PRINT: permissions[index].PAGE_PRINT ? "Y" : "N",
          PAGE_EXCEL: permissions[index].PAGE_EXCEL ? "Y" : "N",
        };

        return _update_WithoutToken(
          `api/GLCMA100200/Update/${USER_CD}`,
          updateData
        );
      });

      await Promise.all(updates);
      setOpenSnackbar(true); // Show success message
    } catch (error) {
      console.error("Error updating user access:", error);
    }
  };

  const handleCheckboxChange = (index, field) => {
    setPermissions((prevState) => ({
      ...prevState,
      [index]: {
        ...prevState[index],
        [field]: !prevState[index][field],
      },
    }));
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage - 1); 
  };

 

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };


  const tableContainerStyle = {
    maxHeight: 440,
    overflow: "auto",
    border: "1px solid #ddd",

  };

  const tableStyle = {
    minWidth: 650,
    borderCollapse: "collapse",
    fontFamily: "Arial, sans-serif", 
    fontSize: "12px", 
     backgroundColor: "#f9f9f9", 
 
    border: "1px solid #ccc", 
  };

  const tableCellStyle = {
  fontWeight: "bold",
  padding: "14px",
  backgroundColor: "#045e84",
  color: "white",
  borderBottom: "1px solid #ddd",
  fontSize: "12px",  

    
  };


  const tableCellrow = {
    padding: "14px",
    borderBottom: "1px solid #ddd",
    fontSize: "12px",
    fontWeight:"700"
  };

  const tableRowStyle = {
    borderBottom: "1px solid #ddd",
    "&:nth-of-type(odd)": {
       backgroundColor: "#f2f2f2", // alternate row color

    },
  };

  return (
    <Box>
      <TableContainer component={Paper} style={tableContainerStyle}>
        <Table size="sm" stickyHeader style={tableStyle}>
          <TableHead>
            <TableRow>
              <TableCell style={tableCellStyle}>Module</TableCell>
              <TableCell style={tableCellStyle}>ID</TableCell>
              <TableCell style={tableCellStyle}>Menu</TableCell>
              <TableCell style={tableCellStyle}>Page ID</TableCell>
              <TableCell style={tableCellStyle}>Name</TableCell>
              <TableCell style={tableCellStyle}>Y/N</TableCell>
              <TableCell style={tableCellStyle}>Inquiry</TableCell>
              <TableCell style={tableCellStyle}>Save</TableCell>
              <TableCell style={tableCellStyle}>Update</TableCell>
              <TableCell style={tableCellStyle}>Delete</TableCell>
              <TableCell style={tableCellStyle}>App Y1</TableCell>
              <TableCell style={tableCellStyle}>App Y2</TableCell>
              <TableCell style={tableCellStyle}>App Y3</TableCell>
              <TableCell style={tableCellStyle}>App Y4</TableCell>
              <TableCell style={tableCellStyle}>App Y5</TableCell>
              <TableCell style={tableCellStyle}>App Y6</TableCell>
              <TableCell style={tableCellStyle}>Print</TableCell>
              <TableCell style={tableCellStyle}>Excel</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                const actualIndex = page * rowsPerPage + index;
                return (
                  <TableRow key={actualIndex} style={tableRowStyle}>
                    <TableCell style={tableCellrow}>{row.MODULE_CD}</TableCell>
                    <TableCell style={tableCellrow}>{row.MENU_CD}</TableCell>
                    <TableCell style={tableCellrow}>{row.MENU_NM}</TableCell>
                    <TableCell style={tableCellrow}>{row.PAGE_ID}</TableCell>
                    <TableCell style={tableCellrow}>{row.PAGE_NM}</TableCell>
                    {[
                      "PAGE_YN",
                      "PAGE_INQUIRY",
                      "PAGE_SAVE",
                      "PAGE_UPDATE",
                      "PAGE_DELETE",
                      "PAGE_APP_Y1",
                      "PAGE_APP_Y2",
                      "PAGE_APP_Y3",
                      "PAGE_APP_Y4",
                      "PAGE_APP_Y5",
                      "PAGE_APP_Y6",
                      "PAGE_PRINT",
                      "PAGE_EXCEL",
                    ].map((field) => (
                      <TableCell align="center" style={tableCellrow} key={field}>
                        <Checkbox
                          checked={permissions[actualIndex]?.[field] || false}
                          onChange={() =>
                            handleCheckboxChange(actualIndex, field)
                          }
                        />
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>

      <Stack spacing={2} sx={{ mt: 2, alignItems: "center" }}>
        <Pagination
          count={Math.ceil(data.length / rowsPerPage)}
          page={page + 1}
          onChange={handleChangePage}
        />
      </Stack>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          User access updated successfully!
        </Alert>
      </Snackbar>

      <Button
        variant="contained"
        color="primary"
        onClick={updateUserAccess}
        sx={{ mt: 2 }}
      >
        Update User Access
      </Button>
    </Box>
  );
};

export default EmpAccess;
