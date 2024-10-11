import React from "react";
import { Dialog, Stack, CircularProgress, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { selectProgress } from "../redux/slices/progress.reducer";

function ProgressDialog() {
  const { open, message } = useSelector((state) => selectProgress(state));

  return (
    <Dialog
      open={open}
      width={55}
      height={55}
      PaperProps={{
        style: {
          backgroundColor: "transparent",
          boxShadow: "none",
        },
      }}
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
        width={200}
        height={200}
      >
        <CircularProgress color="primary" size={50} />
        <Typography
          style={{ color: "#0744ED", textAlign: "center", fontWeight: "bold" }}
        >
          {message}
        </Typography>
      </Stack>
    </Dialog>
  );
}

export default ProgressDialog;
