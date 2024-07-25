import { Box, Button, Grid, Stack, TextField } from '@mui/material';
import React from 'react';
import ProfilePhoto from "../../../assets/logo/profilepic2.jpg";
import EmpAccess from '../EmpAccess/EmpAccess';

const EmpInfo = ({ user }) => {
  

  return (
    <Box sx={{ width: "100%", }}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          background: "#f3f3f3",
          padding: "10px",
          display: "flex"
        }}
      >
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": {
              m: 0.6,
              width: "calc(100% - 10px)",
              "& .MuiInputBase-root": {
                fontSize: "0.8rem",
              },
              "& .MuiInputLabel-root": {
                fontSize: "0.8rem",
              },
            },

            height: "100%",
            width: "65%",
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
                value={user ? user.EMP_CD : ""}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Contact No"
                variant="outlined"
                name="MOB_NO_01"
                required
                fullWidth
                size="small"
                value={user ? user.MOB_NO_01 : ""}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Name"
                variant="outlined"
                name="EMP_NM"
                required
                fullWidth
                size="small"
                value={user ? `${user.EMP_FNM} ${user.EMP_LNM}` : ""}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Landline"
                variant="outlined"
                name="MOB_NO_02"
                required
                fullWidth
                size="small"
                value={user ? user.MOB_NO_02 : ""}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Department"
                variant="outlined"
                name="DEPT_CD"
                required
                fullWidth
                size="small"
                value={user ? user.DEPT_CD : ""}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Ext"
                variant="outlined"
                name="EXT"
                required
                fullWidth
                size="small"
                value={user ? user.EXT : ""}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Position"
                variant="outlined"
                name="POS_CD"
                required
                fullWidth
                size="small"
                value={user ? user.POS_CD : ""}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Email"
                variant="outlined"
                name="EMAIL"
                required
                fullWidth
                size="small"
                value={user ? user.EMAIL : ""}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            width: "35%",

            padding: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <img src={ProfilePhoto} alt="photo" style={{ width: "30%" }} />
          <Box sx={{ width: "65%" }}>
            <Stack spacing={1}>
              <Button variant="contained" sx={{ flexGrow: 1, fontSize: "10px" }}>
                Password reset
              </Button>
              <Button variant="contained" sx={{ flexGrow: 1, fontSize: "11px" }} color="error">
                Block
              </Button>
              <Button variant="contained" sx={{ flexGrow: 1, fontSize: "11px" }} color="success">
                Activate
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          maxWidth: "100%",
          background: "#f3f3f3",
          padding: "10px",
          marginTop: "10px",
        }}
      >
        <EmpAccess
           USER_CD={user? user.EMP_CD: null}
        />
      </Box>
    </Box>
  );
};

export default EmpInfo;
