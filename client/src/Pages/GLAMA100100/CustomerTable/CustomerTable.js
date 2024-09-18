import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import TGL_AM_A100 from "./TGL_AM_A100";
import TGL_AM_A101_Modal from "./TGL_AM_A101_Modal"; // Example for modal, similarly create other modals
import TGL_AM_A102_Modal from "./TGL_AM_A102_Modal";
import TGL_AM_A103_Modal from "./TGL_AM_A103_Modal";
import TGL_AM_A104_Modal from "./TGL_AM_A104_Modal";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, .03)",
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper": {
    marginLeft: "auto",
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const CustomerTable = () => {
  const [expanded, setExpanded] = useState("panel1");
  const [activeModal, setActiveModal] = useState(null); // Store active modal identifier

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleOpenModal = (modalId) => {
    setActiveModal(modalId); // Set the active modal ID
  };

  const handleCloseModal = () => {
    setActiveModal(null); // Close the modal
  };

  return (
    <Box sx={{ width: "100%" }}>
      <div>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          defaultExpanded
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>TGL AM A100</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TGL_AM_A100 />
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>TGL AM A101</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleOpenModal("modalA101")} // Open specific modal
            >
              Add
            </Button>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>TGL AM A102</Typography>
          </AccordionSummary>
          <AccordionDetails  sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleOpenModal("modalA102")} // Open specific modal
            >
              Add
            </Button>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography>TGL AM A103</Typography>
          </AccordionSummary>
          <AccordionDetails  sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleOpenModal("modalA103")} // Open specific modal
            >
              Add
            </Button>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
            <Typography>TGL AM A104</Typography>
          </AccordionSummary>
          <AccordionDetails  sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleOpenModal("modalA104")} // Open specific modal
            >
              Add
            </Button>
          </AccordionDetails>
        </Accordion>
      </div>

      {/* Conditionally render the appropriate modal based on the activeModal value */}
      {activeModal === "modalA101" && (
        <TGL_AM_A101_Modal open={true} handleClose={handleCloseModal} />
      )}
      {activeModal === "modalA102" && (
        <TGL_AM_A102_Modal open={true} handleClose={handleCloseModal} />
      )}
      {activeModal === "modalA103" && (
        <TGL_AM_A103_Modal open={true} handleClose={handleCloseModal} />
      )}
      {activeModal === "modalA104" && (
        <TGL_AM_A104_Modal open={true} handleClose={handleCloseModal} />
      )}
    </Box>
  );
};

export default CustomerTable;
