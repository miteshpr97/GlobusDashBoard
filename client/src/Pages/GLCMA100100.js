import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import SideBar from "../component/SideBar";
import CommonBtn from "../component/CommonComponnets/CommonBtn";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";

import IconButton from "@mui/material/IconButton";
import WidgetsIcon from "@mui/icons-material/Widgets";
import SearchIcon from "@mui/icons-material/Search";

const GLCMA100100 = () => {
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
          <Button
            variant="contained"
            sx={{ backgroundColor: "#003285", color: "white" }}
          >
            ADD EMPLOYEE
          </Button>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "100%",
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
              width: "28%",
              height: "100%",
              background: "white",
              padding: "10px",
            }}
          >
            <Box
              sx={{ width: "100%", height: "100%", background: "yellow" }}
            ></Box>
          </Box>
          <Box
            sx={{
              width: "72%",
              height: "100%",
              background: "white",
              padding: "10px",
            }}
          >
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "calc(100% - 16px)" },
                background: "#f3f3f3",
                height: "100%",
                width: "100%",
              }}
              noValidate
              autoComplete="off"
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: "10px",
                }}
              >
                <WidgetsIcon sx={{ color: "orange" }} />
                <h4 style={{ margin: 10 }}>User Details</h4>
              </div>

              <Grid container spacing={0.5}>
                <Grid item xs={4}>
                  <TextField
                    label="EMPLOYEE CODE"
                    variant="outlined"
                    name="EMP_CD"
                    required
                    fullWidth
                    size="small"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={0.5}>
                <Grid item xs={4}>
                  <TextField
                    label="SUR NAME"
                    variant="outlined"
                    name="EMP_SNM"
                    required
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="FIRST NAME"
                    variant="outlined"
                    name="EMP_FNM "
                    required
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="MIDDLE NAME"
                    variant="outlined"
                    name="EMP_MNM "
                    required
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="LAST NAME"
                    variant="outlined"
                    name="EMP_LNM"
                    required
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="POSITION CODE"
                    variant="outlined"
                    name="POS_CD"
                    required
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="DEPARTMENT CODE"
                    variant="outlined"
                    name="DEPT_CD"
                    required
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="EMAIL"
                    variant="outlined"
                    name="EMAIL"
                    required
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="EMAIL_PER"
                    variant="outlined"
                    name="EMAIL_PER"
                    required
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="MOBILE NO 1"
                    variant="outlined"
                    name="MOB_NO_01"
                    required
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="MOB_PER_01"
                    variant="outlined"
                    name="MOB_PER_01"
                    required
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="MOB_NO_02"
                    variant="outlined"
                    name="MOB_NO_02"
                    required
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="EMPLOYEE Type"
                    variant="outlined"
                    name="EMP_TP"
                    required
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="REF_NO"
                    variant="outlined"
                    name="REF_NO"
                    required
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="STATUS"
                    variant="outlined"
                    name="STATUS"
                    required
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="DATE_JOIN"
                    variant="outlined"
                    name="DATE_JOIN"
                    required
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="DATE_BIRTH"
                    variant="outlined"
                    name="DATE_BIRTH"
                    required
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="GENDER"
                    variant="outlined"
                    name="GENDER"
                    required
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="RELIGION"
                    variant="outlined"
                    name="RELIGION"
                    required
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="ADD_01"
                    variant="outlined"
                    name="ADD_01"
                    required
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="ADD_STATE"
                    variant="outlined"
                    name="ADD_STATE"
                    required
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="ADD_LANDMARK"
                    variant="outlined"
                    name="ADD_LANDMARK"
                    required
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="ADD_CITY"
                    variant="outlined"
                    name="ADD_CITY"
                    required
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="ADD_PIN"
                    variant="outlined"
                    name="ADD_PIN"
                    required
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="PAN_CARD"
                    variant="outlined"
                    name="PAN_CARD"
                    required
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="NATION_ID"
                    variant="outlined"
                    name="NATION_ID"
                    required
                    fullWidth
                    size="small"
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GLCMA100100;
