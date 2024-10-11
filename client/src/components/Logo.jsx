import React from "react";
import { Box } from "@mui/material";
import logoImage from "../assets/images/task_scheduler_logo.png";

function Logo({ width }) {
  return (
    <Box width={width}>
      <Box component="img" src={logoImage} width="100%" />
    </Box>
  );
}

export default Logo;
