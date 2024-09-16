import React, { useEffect, useState } from "react";
import {
  Button,
  TextField,
  Grid,
  IconButton,
  Box,
} from "@mui/material";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

function CreateForm() {
  const [open, setOpen] = useState(false);
  const [dropdownData, setDropdownData] = useState([]);
console.log(dropdownData, "datadropdinw");


  const [formData, setFormData] = useState({
    REF_TNO: null,
    REF_TYPE: "",
    REF_NO: "",
    REF_DESC: "",
    RMKS: "",
    LCURR_CD: "",
    LAMT: "",
    EXCHANGE_RATE: "",
    FCURR_CD: "",
    FAMT: "",
    DOC_DTE: "",
    POST_DTE: "",
    // REG_DATE: "",
    REG_BY: "",
    DOC_STATUS: "",
    YEAR_CD: "",    
    REG_DATE: new Date().toISOString().split('T')[0]
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = (`0${d.getMonth() + 1}`).slice(-2);
    const day = (`0${d.getDate()}`).slice(-2);
    return `${year}${month}${day}`;
  };

  const getCurrentYearMonth = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = (`0${now.getMonth() + 1}`).slice(-2);
    return `${year}${month}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const currentDate = new Date();
    const formattedREG_DATE = currentDate.toISOString().slice(0, 19);
    const formattedDOC_DTE = formatDate(formData.DOC_DTE);
    const formattedPOST_DTE = formatDate(formData.POST_DTE);

    const dataToPost = {
      ...formData,
      DOC_DTE: formattedDOC_DTE,
      POST_DTE: formattedPOST_DTE,
      REG_DATE: formattedREG_DATE,
      YEAR_CD: getCurrentYearMonth(), 
    };

    try {
      const response = await axios.post(
        "api/GLAMT100100",
        dataToPost
      );
      console.log("Form submitted successfully:", response.data);
      handleClose();
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

useEffect(()=>{
  const fetchData = async () =>{
    try{
      const response = await axios.get("/api/GLCWP100100/dropdown");
      setDropdownData(response.data);
    }
    catch (error){
console.error("error fetching data:", error)
    }
  }

  fetchData();

}, []);



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
          <CloseIcon sx={{ fontSize: "2rem" }} />
        </IconButton>
        <DialogContent>
          <Box
            component="form"
            onSubmit={handleSubmit}
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
                  name="REG_DATE"
                  required
                  fullWidth
                  size="small"
                  value={formData.REG_DATE}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  disabled
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="TRANSACTION REF NO"
                  variant="outlined"
                  name="REF_TNO"
                  disabled
                  fullWidth
                  size="small"
                  value={formData.REF_TNO}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="YEAR CODE"
                  variant="outlined"
                  name="YEAR_CD"
                  required
                  fullWidth
                  size="small"
                  value={getCurrentYearMonth()}
                  disabled
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="POSTING DATE"
                  variant="outlined"
                  name="POST_DTE"
                  required
                  fullWidth
                  size="small"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={formData.POST_DTE}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="DOCUMENT DATE"
                  variant="outlined"
                  name="DOC_DTE"
                  required
                  fullWidth
                  size="small"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={formData.DOC_DTE}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="REF TYPE"
                  variant="outlined"
                  name="REF_TYPE"
                  required
                  fullWidth
                  size="small"
                  value={formData.REF_TYPE}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="REF NO"
                  variant="outlined"
                  name="REF_NO"
                  required
                  fullWidth
                  size="small"
                  value={formData.REF_NO}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="DESC"
                  variant="outlined"
                  name="REF_DESC"
                  required
                  fullWidth
                  size="small"
                  value={formData.REF_DESC}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="REMARK"
                  variant="outlined"
                  name="RMKS"
                  required
                  fullWidth
                  size="small"
                  value={formData.RMKS}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="LOCAL CURRENCY"
                  variant="outlined"
                  name="LCURR_CD"
                  required
                  fullWidth
                  size="small"
                  value={formData.LCURR_CD}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="LOCAL AMOUNT"
                  variant="outlined"
                  name="LAMT"
                  required
                  fullWidth
                  size="small"
                  value={formData.LAMT}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="FOREIGN CURRENCY"
                  variant="outlined"
                  name="FCURR_CD"
                  required
                  fullWidth
                  size="small"
                  value={formData.FCURR_CD}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="FOREIGN AMOUNT"
                  variant="outlined"
                  name="FAMT"
                  required
                  fullWidth
                  size="small"
                  value={formData.FAMT}
                  onChange={handleChange}
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
                  value={formData.EXCHANGE_RATE}
                  onChange={handleChange}
                />
              </Grid>
            
              <Grid item xs={4}>
                <TextField
                  label="REGISTERED BY"
                  variant="outlined"
                  name="REG_BY"
                  required
                  fullWidth
                  size="small"
                  value={formData.REG_BY}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="DOCUMENT STATUS"
                  variant="outlined"
                  name="DOC_STATUS"
                  required
                  fullWidth
                  size="small"
                  value={formData.DOC_STATUS}
                  onChange={handleChange}
                />
              </Grid>
         
              <Grid item xs={12} style={{ textAlign: "right" }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default CreateForm;
