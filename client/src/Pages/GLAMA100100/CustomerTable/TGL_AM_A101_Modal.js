import React from "react";
import { Button, TextField, Grid, IconButton, Box } from "@mui/material";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const TGL_AM_A101_Modal = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ fontSize: "15px", padding: "14px 20px 10px 20px" }}>
        ADD TGL AM A101
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 15,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon sx={{ fontSize: "1.5rem" }} />
      </IconButton>
      <DialogContent>
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
            background: "#f3f3f3",
            padding: "10px",
          }}
          noValidate
          autoComplete="off"
        >
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <TextField
                label="REF NO"
                variant="outlined"
                name="REF"
                fullWidth
                size="small"
          
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="SEQ NO"
                variant="outlined"
                name="SEQ"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="BANK ACC NO"
                variant="outlined"
                name="Address"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="BANK NAME"
                variant="outlined"
                name="ContactPerson"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="BANK BRANCH"
                variant="outlined"
                name="ContactPerson"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="IFSC CODE"
                variant="outlined"
                name="ContactPerson"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="SWIFT CODE"
                variant="outlined"
                name="ContactPerson"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="BANK ADDRESS"
                variant="outlined"
                name="ContactPerson"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="COUNTRY CODE"
                variant="outlined"
                name="ContactPerson"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="ACTIVE YN"
                variant="outlined"
                name="ContactPerson"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={12} style={{ textAlign: "right" }}>
              <Button variant="outlined" onClick={handleClose}   sx={{ marginRight: 1 }}>
                Cancel
              </Button>
              <Button
                variant="contained"
                color="primary"
              
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default TGL_AM_A101_Modal;
