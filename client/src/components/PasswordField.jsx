import React from 'react';
import PropTypes from 'prop-types';
import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material';
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';

function PasswordField({
  id,
  label,
  size = 'small',
  value,
  error,
  helperText,
  onChange,
  fullWidth,
  iconButtonSize = 'small',
  iconSize = 'small',
  onKeyDown,
}) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <FormControl variant="outlined" fullWidth={fullWidth}>
      <InputLabel htmlFor={id} size={size} color={error ? 'error' : 'primary'}>
        {label}
      </InputLabel>
      <OutlinedInput
        id={id}
        type={showPassword ? 'text' : 'password'}
        endAdornment={(
          <InputAdornment position="end" style={{ backgroundColor: 'white' }}>
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseUp={handleMouseUpPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
              size={iconButtonSize}
              color={error ? 'error' : 'default'}
              disableRipple
              tabIndex={-1}
            >
              {showPassword ? (
                <VisibilityOffOutlined fontSize={iconSize} />
              ) : (
                <VisibilityOutlined fontSize={iconSize} />
              )}
            </IconButton>
          </InputAdornment>
        )}
        label={label}
        size={size}
        value={value}
        onChange={onChange}
        error={error}
        onKeyDown={onKeyDown}
      />
      {helperText ? (
        <FormHelperText sx={{ color: 'error.main' }}>{helperText}</FormHelperText>
      ) : null}
    </FormControl>
  );
}

PasswordField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium']),
  value: PropTypes.string,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  fullWidth: PropTypes.bool,
  iconButtonSize: PropTypes.oneOf(['small', 'medium', 'large']),
  iconSize: PropTypes.oneOf(['inherit', 'small', 'medium', 'large']),
  onKeyDown: PropTypes.func,
};

export default PasswordField;
