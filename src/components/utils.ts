export const validateAccountNumber = (
  value: string,
  length?: number
): boolean => {
  let valid = false;

  const value_ = Number(value);

  valid = Number.isFinite(value_) && !Number.isNaN(value_) && value_ >= 0;

  if (valid && length !== undefined) {
    valid = value.length === length;
  }

  return valid;
};
