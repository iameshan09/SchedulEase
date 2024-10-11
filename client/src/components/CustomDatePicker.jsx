import React from "react";
import PropTypes from "prop-types";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

function CustomDatePicker({
  value,
  onChange,
  helperText,
  error,
  label,
  disabled,
  maxDate,
  minDate,
}) {
  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      dateFormats={{
        monthAndYear: "MMMM",
      }}
    >
      <DatePicker
        label={label}
        maxDate={maxDate ? dayjs(maxDate) : undefined}
        value={value ? dayjs(value) : undefined}
        onChange={onChange}
        //disableMaskedInput
        disabled={disabled}
        slotProps={{
          textField: {
            size: "small",
            helperText,
            error,
            fullWidth: true,
          },
        }}
        minDate={minDate ? dayjs(minDate) : undefined}
      />
    </LocalizationProvider>
  );
}

CustomDatePicker.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  maxDate: PropTypes.instanceOf(Date),
  helperText: PropTypes.string,
  error: PropTypes.bool,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  minDate: PropTypes.instanceOf(Date),
};

export default CustomDatePicker;
