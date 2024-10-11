import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import {
  PRIORITY_HIGH,
  PRIORITY_LOW,
  PRIORITY_MEDIUM,
} from "../../../constants/priorities";

function PrioritySelector({ value, onChange }) {
  return (
    <FormControl size="small">
      <FormLabel id="demo-radio-buttons-group-label" sx={{ fontSize: 14 }}>
        Priority
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        onChange={onChange}
        row
        value={value}
      >
        <FormControlLabel
          value={PRIORITY_HIGH}
          control={<Radio size="small" />}
          label="High"
          slotProps={{
            typography: {
              fontSize: 14,
            },
          }}
        />
        <FormControlLabel
          value={PRIORITY_MEDIUM}
          control={<Radio size="small" />}
          label="Medium"
        />
        <FormControlLabel
          value={PRIORITY_LOW}
          control={<Radio size="small" />}
          label="Low"
        />
      </RadioGroup>
    </FormControl>
  );
}

export default PrioritySelector;
