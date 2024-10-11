import { Box, Button, Grid } from "@mui/material";
import React, { useState } from "react";
import PrioritySelector from "./priority-selector";
import { useFormik } from "formik";
import CustomDatePicker from "../../CustomDatePicker";
import { getRandomId } from "../../../utils/helper.utils";

function FilterPane({ setPriority, setDueDate }) {
  const [pickerKey, setPickerKey] = useState(getRandomId());

  const formik = useFormik({
    initialValues: {
      priority: "",
      due_date: "",
    },
    onSubmit: async (values, { resetForm }) => {
      setPriority(values.priority);
      setDueDate(values.due_date);
      resetForm({ values: "" });
      setPickerKey(getRandomId());
    },
  });

  const _handlePriorityChange = (e) => {
    formik.setFieldError("priority", "");
    formik.setFieldValue("priority", e.target.value, false);
  };

  const _handleDueDateChange = (v) => {
    formik.setFieldError("due_date", "");
    formik.setFieldValue("due_date", v, false);
  };

  return (
    <Box border="1px dashed #cbb4f3" borderRadius={8}>
      <Grid
        component="form"
        container
        onSubmit={formik.handleSubmit}
        alignItems="center"
        columnSpacing={30}
        rowSpacing={20}
        py={20}
        px={40}
      >
        <Grid item xs={12} md={6} lg={4}>
          <PrioritySelector
            value={formik.values.priority}
            onChange={_handlePriorityChange}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CustomDatePicker
            label="Due date"
            key={pickerKey}
            value={formik.values.due_date}
            onChange={_handleDueDateChange}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Button size="small" type="submit" variant="contained">
            Filter
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FilterPane;
