import React, { memo } from "react";
import {
  PRIORITY_HIGH,
  PRIORITY_LOW,
  PRIORITY_MEDIUM,
} from "../../../constants/priorities";
import { Chip } from "@mui/material";

const PriorityChip = ({ priority, setPriority }) => {
  const removePriority = () => {
    setPriority("");
  };

  return (
    <>
      {(() => {
        switch (priority) {
          case PRIORITY_HIGH:
            return (
              <Chip
                variant="filled"
                color="error"
                label="High"
                size="small"
                onDelete={removePriority}
              />
            );
          case PRIORITY_MEDIUM:
            return (
              <Chip
                variant="filled"
                color="warning"
                label="Medium"
                size="small"
                onDelete={removePriority}
              />
            );
          case PRIORITY_LOW:
            return (
              <Chip
                variant="filled"
                color="success"
                label="Low"
                size="small"
                onDelete={removePriority}
              />
            );
          default:
            return null;
        }
      })()}
    </>
  );
};

export default memo(PriorityChip);
