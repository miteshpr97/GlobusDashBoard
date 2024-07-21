import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Grid, MenuItem, TextField } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { createUserData } from '../../../features/userCreation/userCreationSlice';

const CreateUser = () => {
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
    UPD_DATE: null
  });

  const dispatch = useDispatch();
  const status = useSelector((state) => state.userCreation.status);
  const error = useSelector((state) => state.userCreation.error);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUserData(userData));
  };

  

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
      onSubmit={handleSubmit}
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
            required
            fullWidth
            size="small"
            onChange={handleInputChange}
            value={userData.EMP_FNM}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="SECOND NAME"
            variant="outlined"
            name="EMP_SNM"
            required
            fullWidth
            size="small"
            onChange={handleInputChange}
            value={userData.EMP_SNM}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="MIDDLE NAME"
            variant="outlined"
            name="EMP_MNM"
            required
            fullWidth
            size="small"
            onChange={handleInputChange}
            value={userData.EMP_MNM}
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
          />
        </Grid>
      </Grid>
      <button type="submit">submit</button>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
    </Box>
  );
};

export default CreateUser;
