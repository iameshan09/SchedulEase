import {
  PRIORITY_HIGH,
  PRIORITY_LOW,
  PRIORITY_MEDIUM,
} from "../constants/priorities";
import { isDateGreaterThanNow } from "../utils/date.utils";

const validateAdd = (values) => {
  const errors = {};

  if (!values.title.trim().length) {
    errors.title = "Required";
  }

  if (!values.priority.trim().length) {
    errors.priority = "Required";
  } else if (
    ![PRIORITY_HIGH, PRIORITY_LOW, PRIORITY_MEDIUM].includes(values.priority)
  ) {
    errors.priority = "Invalid";
  }

  if (!values.due_date.trim().length) {
    errors.due_date = "Required";
  } else if (!isDateGreaterThanNow(values.due_date)) {
    errors.due_date = "Due date must be future date";
  }

  return errors;
};

export { validateAdd };
