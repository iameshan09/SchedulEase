import { Stack } from "@mui/material";
import React from "react";
import DateChip from "./date-chip";
import PriorityChip from "./priority-chip";

function SelectedFilters({ dueDate, setDueDate, priority, setPriority }) {
  return (
    <Stack direction="row" gap={20}>
      {dueDate && <DateChip dueDate={dueDate} setDueDate={setDueDate} />}
      {priority && (
        <PriorityChip priority={priority} setPriority={setPriority} />
      )}
    </Stack>
  );
}

export default SelectedFilters;
