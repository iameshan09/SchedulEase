"use client";

import React from "react";
import PropTypes from "prop-types";
import { Dialog, Box, Button } from "@mui/material";
import { WarningAmber } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { deleteApi } from "../../api/task.api";
import {
  endProgress,
  startProgress,
} from "../../redux/slices/progress.reducer";
import { getServerError } from "../../utils/errors.utils";
import { getRandomId } from "../../utils/helper.utils";

function DeleteTaskDialog({ open, setOpen, task, setTask, setRefetchId }) {
  const dispatch = useDispatch();

  const removeFaculty = async () => {
    try {
      dispatch(startProgress());

      await deleteApi(task?.id);
      setOpen(false);
      setTask(null);
      setRefetchId(getRandomId());
      toast.success("Task deleted successfully!");
    } catch (err) {
      toast.error(getServerError(err));
      console.log(err);
    } finally {
      dispatch(endProgress());
    }
  };

  const _handleCancel = () => {
    setOpen(false);
    setTask(null);
  };

  return (
    <Dialog open={open} PaperProps={{ style: { borderRadius: 4 } }}>
      <Box
        display="flex"
        flexDirection="column"
        width="100%"
        justifyContent="start"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="start"
          px={30}
          py={20}
          bgcolor="error.main"
          gap={15}
        >
          <Box color="white">
            <WarningAmber />
          </Box>
          <Box color="white">Do you want to delete this task?</Box>
        </Box>
        <Box display="flex" flexDirection="column" padding={30} gap={30}>
          <Box display="flex" flexDirection="column" justifyContent="start">
            All the data related to this scheduled task will be lost.
          </Box>
          <Box display="flex" justifyContent="end" gap={30}>
            <Box width={86}>
              <Button
                onClick={_handleCancel}
                variant="outlined"
                color="error"
                fullWidth
              >
                Cancel
              </Button>
            </Box>
            <Box width={86}>
              <Button
                onClick={removeFaculty}
                variant="contained"
                color="error"
                fullWidth
              >
                Delete
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
}

DeleteTaskDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  task: PropTypes.object,
  setTask: PropTypes.func.isRequired,
  setRefetchId: PropTypes.func.isRequired,
};

export default DeleteTaskDialog;
