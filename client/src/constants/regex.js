const REGEX_EMAIL = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const REGEX_OTP = /^[0-9]{6}$/;
const REGEX_PASSWORD = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^ws]).{8,30}$/;
const REGEX_MOBILE = /^(?:\+\d{9,14}|\d{10,15})$/;
const REGEX_WALLET_ADDRESS = /^0x[a-fA-F0-9]{40}$/;
const REGEX_MUST_INCLUDE_NUMBER_OR_LETTER = /^(?=.*[a-zA-Z0-9]).+$/;
const REGEX_MUST_HAVE_LETTERS = /^.*[a-zA-Z].*$/;
const REGEX_NIC = /^([0-9]{9}[x|X|v|V]|[0-9]{12})$/m;
const REGEX_HOLDER_ID = /^\d{4}-[A-Z0-9]{4}$/;
const REGEX_YEAR = /^(1000|([1-9]\d{3}))$/;
const REGEX_LETTERS = /^[a-zA-Z\s]+$/;
const REGEX_HOLDER_ENC_KEY = /^\d{5}-[A-Z0-9]{5}$/;

export {
  REGEX_EMAIL,
  REGEX_OTP,
  REGEX_PASSWORD,
  REGEX_MOBILE,
  REGEX_WALLET_ADDRESS,
  REGEX_MUST_INCLUDE_NUMBER_OR_LETTER,
  REGEX_MUST_HAVE_LETTERS,
  REGEX_NIC,
  REGEX_HOLDER_ID,
  REGEX_YEAR,
  REGEX_LETTERS,
  REGEX_HOLDER_ENC_KEY,
};
