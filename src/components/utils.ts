export const validateAccountNumber = (
  value: string,
  length?: number
): boolean => {
  let valid = false;

  valid =
    Number.isFinite(value) && !Number.isNaN(value) && parseInt(value) >= 0;

  if (valid && length !== undefined) {
    valid = value.length === length;
  }

  return valid;
};
