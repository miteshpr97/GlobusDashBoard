import { Box, Button, Grid, Stack, TextField } from '@mui/material';
import React from 'react';


const TGL_AM_A100 = () => {
  

  return (
    <Box sx={{ width: "100%", }}>

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
            width: "100%",
          }}
          noValidate
          autoComplete="off"
        >
          <Grid container>
            <Grid item xs={4}>
              <TextField
                label="REF NO"
                variant="outlined"
                name="REF_NO"
                required
                fullWidth
                size="small"

                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Customer Name"
                variant="outlined"
                name="Customer"
                required
                fullWidth
                size="small"
     
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Active YN"
                variant="outlined"
                name="Active"
                required
                fullWidth
                size="small"
  
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Country Code"
                variant="outlined"
                name="Country"
                required
                fullWidth
                size="small"
 
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Customer Address"
                variant="outlined"
                name="Customer"
                required
                fullWidth
                size="small"
             
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Email"
                variant="outlined"
                name="Email"
                required
                fullWidth
                size="small"
          
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Website"
                variant="outlined"
                name="Website"
                required
                fullWidth
                size="small"
           
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="CR No"
                variant="outlined"
                name="EMAIL"
                required
                fullWidth
                size="small"
        
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Company Type"
                variant="outlined"
                name="Company_Type"
                required
                fullWidth
                size="small"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
          </Grid>
        </Box>
      
      </Box>

     

  );
};
export default TGL_AM_A100