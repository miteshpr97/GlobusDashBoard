import React, { useState } from "react";
import {
  Box,
  Paper,
  InputBase,
  IconButton,
  Grid,
  TextField,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SideBar from "../../component/SideBar";
import CommonBtn from "../../component/CommonComponnets/CommonBtn"
import CreateForm from "./CreateModal/CreateForm";
import TableData from "./Table/TableData";

const GLAMT100100 = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const Save_Click = () => {
    alert("Save GLCMA100200 button clicked!");
  };

  const sidebarWidth = isSidebarOpen ? 200 : 0;

  return (
    <Box sx={{ display: "flex", width: "100vw", overflow: "hidden" }}>
      {/* Sidebar */}
      {isSidebarOpen && <SideBar sx={{ width: sidebarWidth, flexShrink: 0 }} />}

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginTop: "55px",
          overflowX: "hidden",
          width: `calc(100vw - ${sidebarWidth}px)`,
          transition: "width 0.3s ease",
        }}
      >
        <Box>
          <CommonBtn PAGE_CD="GLAMT100100" SAVE_CLICK={Save_Click} />
        </Box>

        {/* Search and Filter Section */}
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": {
              m: 0.6,
              width: "calc(100% - 10px)",
              "& .MuiInputBase-root": {
                fontSize: "1rem",
              },
              "& .MuiInputLabel-root": {
                fontSize: "1rem",
              },
            },
            width: "100%",
            background: "#dddddd",
            marginTop: "10px",
            padding: "10px",
          }}
          noValidate
          autoComplete="off"
        >
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Paper
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  background: "white",
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search"
                  inputProps={{ "aria-label": "search" }}
                />
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="REF NO"
                variant="outlined"
                name="ref_no"
                required
                fullWidth
                size="small"
                select
              >
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="START DATE"
                variant="outlined"
                name="start_date"
                required
                fullWidth
                size="small"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="END DATE"
                variant="outlined"
                name="end_date"
                required
                fullWidth
                size="small"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
        </Box>

        {/* Create Form Section */}
        <Box
          sx={{
            width: "100%",
            marginTop: "10px",
            background: "#dddddd",
            padding: "10px",
          }}
        >
          <CreateForm />
        </Box>

        {/* Table Section */}
        <Box
          sx={{
            width: "100%",
            marginTop: "10px",
            background: "#dddddd",
            padding: "10px",
            overflowX: "auto",
          }}
        >
          <TableData />
        </Box>
      </Box>
    </Box>
  );
};

export default GLAMT100100;
