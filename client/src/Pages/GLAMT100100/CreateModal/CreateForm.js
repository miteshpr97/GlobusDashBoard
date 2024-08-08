import React, { useState} from "react";
import {
  Button,
  TextField,
  Grid,
  Container,
  IconButton,
  Box,
} from "@mui/material";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function CreateForm() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Button
          onClick={handleClickOpen}
          variant="contained"
          sx={{
            backgroundColor: "#003285",
            color: "#fff",
            padding: "8px 16px",
          }}
        >
          CREATE NEW
        </Button>
      </Box>
      <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
        <DialogTitle sx={{ fontSize: "22px", padding: "16px 24px 10px 24px" }}>
          CREATE NEW
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
          <CloseIcon sx={{fontSize:"2rem"}}/>
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
              marginTop: "10px",
              padding: "20px",
            }}
            noValidate
            autoComplete="off"
          >
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <TextField
                  label="REG DATE"
                  variant="outlined"
                  name="DATE"
                  required
                  fullWidth
                  size="small"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="POSTING DATE"
                  variant="outlined"
                  name="DATE"
                  required
                  fullWidth
                  size="small"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="DOCUMENT DATE"
                  variant="outlined"
                  name="DATE"
                  required
                  fullWidth
                  size="small"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="REF TYPE"
                  variant="outlined"
                  name="REF"
                  required
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="REF NO"
                  variant="outlined"
                  name="REF"
                  required
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="DESC"
                  variant="outlined"
                  name="DESC"
                  required
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="REMARK"
                  variant="outlined"
                  name="REMARK"
                  required
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="LOCAL CURRENCY"
                  variant="outlined"
                  name="LOCAL"
                  required
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="LOCAL AMOUNT"
                  variant="outlined"
                  name="LOCAL"
                  required
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="FOREIGN CURRENCY"
                  variant="outlined"
                  name="FOREIGN"
                  required
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="FOREIGN AMOUNT"
                  variant="outlined"
                  name="FOREIGN"
                  required
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="EXCHANGE RATE"
                  variant="outlined"
                  name="EXCHANGE_RATE"
                  required
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="TRANSACTION REF NO"
                  variant="outlined"
                  name="TRANSACTION"
                  required
                  fullWidth
                  size="small"
                />
              </Grid>
            </Grid>
            <Container
              sx={{
                marginTop: "10px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Grid item xs={1}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ backgroundColor: "#003285", marginTop: "10px" }}
                >
                  Submit
                </Button>
              </Grid>
            </Container>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default CreateForm;
