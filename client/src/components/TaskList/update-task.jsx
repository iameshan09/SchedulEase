import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Button, TextField, Dialog, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { updateApi } from "../../api/task.api";
import { validateAdd } from "../../validations/task.validations";
import {
  endProgress,
  startProgress,
} from "../../redux/slices/progress.reducer";
import { getServerError } from "../../utils/errors.utils";
import Dropdown from "../Dropdown";
import { priorityOptions } from "../../constants/priorities";
import { getRandomId } from "../../utils/helper.utils";

function UpdateTaskDialog({ open, setOpen, setRefetchId, task, setTask }) {
  const dispatch = useDispatch();

  const init = () => {
    if (task) {
      formik.setValues({
        title: task.title,
        description: task.description,
        priority: task.priority,
        due_date: task.due_date,
      });
    }
  };

  useEffect(() => {
    init();
  }, [task]);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      priority: "",
      due_date: "",
    },
    validate: validateAdd,
    onSubmit: async (values) => {
      try {
        dispatch(startProgress());
        await updateApi(task?.id, values);
        setRefetchId(getRandomId());
        toast.success("Task updated successfully");
        _handleCancel();
      } catch (err) {
        toast.error(getServerError(err));
        console.log(err);
      } finally {
        dispatch(endProgress());
      }
    },
  });

  const _handleTitleChange = (e) => {
    formik.setFieldError("title", "");
    formik.setFieldValue("title", e.target.value, false);
  };

  const _handleDescChange = (e) => {
    formik.setFieldError("description", "");
    formik.setFieldValue("description", e.target.value, false);
  };

  const _handlePriorityChange = (e) => {
    formik.setFieldError("priority", "");
    formik.setFieldValue("priority", e.target.value, false);
  };

  const _handleDueDateChange = (e) => {
    formik.setFieldError("due_date", "");
    formik.setFieldValue("due_date", e.target.value, false);
  };

  const _handleCancel = () => {
    formik.resetForm({ values: "" });
    setOpen(false);
    setTask(null);
  };

  return (
    <Dialog
      open={open}
      PaperProps={{
        sx: {
          borderRadius: 4,
          margin: 0,
          width: { xs: "calc(100% - 20px)", sm: "auto" },
        },
      }}
    >
      <Box
        bgcolor="white"
        p={30}
        gap={30}
        width={{ xs: "100%", sm: 395 }}
        component="form"
        onSubmit={formik.handleSubmit}
      >
        <Box>
          <Typography variant="h5">Modify Scheduled Task</Typography>
        </Box>
        <Box mt={25}>
          <Box height={64}>
            <TextField
              id="title"
              label="Title"
              size="small"
              value={formik.values.title}
              onChange={_handleTitleChange}
              error={!!formik.errors.title}
              helperText={formik.errors.title}
              fullWidth
            />
          </Box>
          <Box height={64} mt={3}>
            <Dropdown
              label="Priority"
              value={formik.values.priority}
              onChange={_handlePriorityChange}
              error={!!formik.errors.priority}
              helperText={formik.errors.priority}
              data={priorityOptions}
            />
          </Box>
          <Box height={64} mt={3}>
            <TextField
              id="due_date"
              type="date"
              label="Due Date"
              size="small"
              value={formik.values.due_date}
              onChange={_handleDueDateChange}
              InputLabelProps={{
                shrink: true,
              }}
              error={!!formik.errors.due_date}
              helperText={formik.errors.due_date}
              fullWidth
            />
          </Box>
          <Box mt={3}>
            <TextField
              id="desc"
              label="Description"
              size="small"
              multiline
              rows={4}
              value={formik.values.description}
              onChange={_handleDescChange}
              error={!!formik.errors.description}
              helperText={formik.errors.description}
              fullWidth
            />
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="end"
          alignItems="center"
          gap={30}
          mt={30}
        >
          <Box width={85}>
            <Button
              onClick={_handleCancel}
              variant="outlined"
              color="primary"
              fullWidth
            >
              Cancel
            </Button>
          </Box>
          <Box width={85}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
}

UpdateTaskDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  setRefetchId: PropTypes.func.isRequired,
  task: PropTypes.any,
  setTask: PropTypes.func.isRequired,
};

export default UpdateTaskDialog;
