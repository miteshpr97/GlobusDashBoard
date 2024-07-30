import React, { useState } from "react";

import { Box, Grid, MenuItem, TextField, Button } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
// import { createUserData } from "../../../features/userCreation/userCreationSlice";

const CreateUser = ({ userData, handleInputChange, formErrors }) => {
 

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": {
          m: 0.6,
          width: "calc(100% - 10px)",
          "& .MuiInputBase-root": {
            fontSize: "0.9rem",
          },
          "& .MuiInputLabel-root": {
            fontSize: "0.9rem",
          },
        },
        height: "100%",
        width: "100%",
        padding: "10px",
        background: "#f3f3f3",
      }}
      noValidate
      autoComplete="off"

    >
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <PersonAddIcon sx={{ color: "orange" }} />
        <h4 style={{ margin: 10 }}>User Creation</h4>
      </div>
      <Grid container spacing={0.5}>
        <Grid item xs={4}>
          <TextField
            label="EMPLOYEE CODE"
            variant="outlined"
            name="EMP_CD"
            fullWidth
            size="small"
            onChange={handleInputChange}
            value={userData.EMP_CD}
    
         
          />
        </Grid>
      </Grid>
      <Grid container spacing={0.5}>
        <Grid item xs={4}>
          <TextField
            label="FIRST NAME"
            variant="outlined"
            name="EMP_FNM"
            fullWidth
            size="small"
            onChange={handleInputChange}
            value={userData.EMP_FNM}
            required
            error={!!formErrors.EMP_FNM}
            helperText={formErrors.EMP_FNM}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="SECOND NAME"
            variant="outlined"
            name="EMP_SNM"
            fullWidth
            size="small"
            onChange={handleInputChange}
            value={userData.EMP_SNM}
            required
            error={!!formErrors.EMP_SNM}
            helperText={formErrors.EMP_SNM}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="MIDDLE NAME"
            variant="outlined"
            name="EMP_MNM"
            fullWidth
            size="small"
            onChange={handleInputChange}
            value={userData.EMP_MNM}
            required
            error={!!formErrors.EMP_MNM}
            helperText={formErrors.EMP_MNM}
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
            onChange={handleInputChange}
            value={userData.EMP_LNM}
            error={!!formErrors.EMP_LNM}
            helperText={formErrors.EMP_LNM}
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
            onChange={handleInputChange}
            value={userData.POS_CD}
            error={!!formErrors.POS_CD}
            helperText={formErrors.POS_CD}
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
            onChange={handleInputChange}
            value={userData.DEPT_CD}
            error={!!formErrors.DEPT_CD}
            helperText={formErrors.DEPT_CD}
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
            onChange={handleInputChange}
            value={userData.EMAIL}
            error={!!formErrors.EMAIL}
            helperText={formErrors.EMAIL}
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
            onChange={handleInputChange}
            value={userData.EMAIL_PER}
            error={!!formErrors.EMAIL_PER}
            helperText={formErrors.EMAIL_PER}
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
            onChange={handleInputChange}
            value={userData.MOB_NO_01}
            error={!!formErrors.MOB_NO_01}
            helperText={formErrors.MOB_NO_01}
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
            onChange={handleInputChange}
            value={userData.MOB_PER_01}
            error={!!formErrors.MOB_PER_01}
            helperText={formErrors.MOB_PER_01}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="MOBILE NO 2"
            variant="outlined"
            name="MOB_NO_02"
            required
            fullWidth
            size="small"
            onChange={handleInputChange}
            value={userData.MOB_NO_02}
            error={!!formErrors.MOB_NO_02}
            helperText={formErrors.MOB_NO_02}
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
            onChange={handleInputChange}
            value={userData.EMP_TP}
            error={!!formErrors.EMP_TP}
            helperText={formErrors.EMP_TP}
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
            onChange={handleInputChange}
            value={userData.REF_NO}
            error={!!formErrors.REF_NO}
            helperText={formErrors.REF_NO}
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
            onChange={handleInputChange}
            value={userData.STATUS}
            error={!!formErrors.STATUS}
            helperText={formErrors.STATUS}
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
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleInputChange}
            value={userData.DATE_JOIN}
            error={!!formErrors.DATE_JOIN}
            helperText={formErrors.DATE_JOIN}
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
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleInputChange}
            value={userData.DATE_BIRTH}
            error={!!formErrors.DATE_BIRTH}
            helperText={formErrors.DATE_BIRTH}
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
            select
            onChange={handleInputChange}
            value={userData.GENDER}
            error={!!formErrors.GENDER}
            helperText={formErrors.GENDER}
          >
            <MenuItem value="">SELECT GENDER</MenuItem>
            <MenuItem value="MALE">MALE</MenuItem>
            <MenuItem value="FEMALE">FEMALE</MenuItem>
            <MenuItem value="OTHERS">OTHERS</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="RELIGION"
            variant="outlined"
            name="RELIGION"
            required
            fullWidth
            size="small"
            onChange={handleInputChange}
            value={userData.RELIGION}
            error={!!formErrors.RELIGION}
            helperText={formErrors.RELIGION}
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
            onChange={handleInputChange}
            value={userData.ADD_01}
            error={!!formErrors.ADD_01}
            helperText={formErrors.ADD_01}
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
            onChange={handleInputChange}
            value={userData.ADD_STATE}
            error={!!formErrors.ADD_STATE}
            helperText={formErrors.ADD_STATE}
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
            onChange={handleInputChange}
            value={userData.ADD_LANDMARK}
            error={!!formErrors.ADD_LANDMARK}
            helperText={formErrors.ADD_LANDMARK}
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
            onChange={handleInputChange}
            value={userData.ADD_CITY}
            error={!!formErrors.ADD_CITY}
            helperText={formErrors.ADD_CITY}
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
            onChange={handleInputChange}
            value={userData.ADD_PIN}
            error={!!formErrors.ADD_PIN}
            helperText={formErrors.ADD_PIN}
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
            onChange={handleInputChange}
            value={userData.PAN_CARD}
            error={!!formErrors.PAN_CARD}
            helperText={formErrors.PAN_CARD}
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
            onChange={handleInputChange}
            value={userData.NATION_ID}
            error={!!formErrors.NATION_ID}
            helperText={formErrors.NATION_ID}
          />
        </Grid>
      </Grid>
   
    </Box>
  );
};

export default CreateUser;
