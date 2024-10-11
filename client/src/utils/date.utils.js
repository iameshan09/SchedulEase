import moment from "moment";

const format = (date, format = "YYYY-MM-DD") => {
  return moment(date).format(format);
};

const isDateGreaterThanNow = (inputDate) => {
  const now = new Date();
  const dateToCompare = new Date(inputDate);
  return dateToCompare > now;
};

export { isDateGreaterThanNow, format };
