import { Box, Button, Grid, Stack, TextField } from '@mui/material'
import React from 'react'

import ProfilePhoto from "../../../assets/logo/profilepic2.jpg";
import EmpAccess from '../EmpAccess/EmpAccess';

const EmpInfo = () => {
  return (
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
        <EmpAccess/>
    </Box>
  </Box>
  )
}

export default EmpInfo