export function isEmpty(value: unknown) {
  if (
    value === undefined ||
    value === null ||
    (typeof value === "object" && value !== null && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  ) {
    return true;
  } else {
    return false;
  }
}
