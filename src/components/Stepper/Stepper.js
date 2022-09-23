import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

export default function HorizontalLabelPositionBelowStepper({
  stepperData,
  activeStep,
}) {
  return (
    <Box>
      <Stepper alternativeLabel activeStep={activeStep}>
        {stepperData.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label.name}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
