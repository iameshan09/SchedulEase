import { REGEX_PASSWORD } from "../constants/regex";

const validateSignIn = (values) => {
  const errors = {};

  if (!values.username.trim().length) {
    errors.username = "Required";
  }

  if (!values.password.trim().length) {
    errors.password = "Required";
  }

  return errors;
};

const validateSignUp = (values) => {
  const errors = {};

  if (!values.username.trim().length) {
    errors.username = "Required";
  }

  if (!values.password.trim().length) {
    errors.password = "Required";
  } else if (!REGEX_PASSWORD.test(values.password)) {
    errors.password = "Invalid";
  }

  if (!values.cPass.trim().length) {
    errors.cPass = "Required";
  } else if (values.password && values.cPass !== values.password) {
    errors.cPass = "Confirmation password not matched";
  }

  return errors;
};

export { validateSignIn, validateSignUp };
