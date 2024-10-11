import {
  Box,
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
  MenuItem,
} from "@mui/material";
import PropTypes from "prop-types";

function Dropdown({
  label,
  value,
  onChange,
  error,
  data,
  helperText,
  disabled,
  idKey = "id",
  labelKey = "label",
  size = "small",
  maxHeight = 400,
  emptyDataText = "No available data",
}) {
  const getMenuItemText = (d) => {
    let menuItemText = "";
    if (Array.isArray(labelKey)) {
      menuItemText = labelKey.map((lk) => d[lk]).join(" ");
    } else {
      menuItemText = d[labelKey];
    }
    return menuItemText;
  };

  return (
    <FormControl fullWidth>
      <InputLabel
        id="select_label_id"
        size="small"
        color={error ? "error" : "primary"}
      >
        {label}
      </InputLabel>
      <Select
        fullWidth
        labelId="select_label_id"
        value={value}
        size={size}
        label={label}
        onChange={onChange}
        error={error}
        disabled={disabled}
        MenuProps={{ PaperProps: { sx: { maxHeight } } }}
      >
        {Array.isArray(data) && data.length ? (
          data.map((d) => (
            <MenuItem key={d[idKey]} value={d[idKey]}>
              <Box>{getMenuItemText(d)}</Box>
            </MenuItem>
          ))
        ) : (
          <MenuItem value="">
            <em>{emptyDataText}</em>
          </MenuItem>
        )}
      </Select>
      {helperText ? (
        <FormHelperText sx={{ color: "error.main" }}>
          {helperText}
        </FormHelperText>
      ) : null}
    </FormControl>
  );
}

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  error: PropTypes.bool,
  data: PropTypes.array.isRequired,
  helperText: PropTypes.string,
  disabled: PropTypes.bool,
  idKey: PropTypes.string,
  labelKey: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  size: PropTypes.oneOf(["small", "medium"]),
  maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  emptyDataText: PropTypes.string,
};

export default Dropdown;
