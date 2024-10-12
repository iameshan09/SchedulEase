import React, { memo } from "react";
import { Chip } from "@mui/material";
import { format } from "../../../utils/date.utils";

const DateChip = ({ dueDate, setDueDate }) => {
  const removeDate = () => {
    setDueDate("");
  };

  return (
    <Chip
      variant="filled"
      color="warning"
      label={format(dueDate)}
      size="small"
      onDelete={removeDate}
    />
  );
};

export default memo(DateChip);
