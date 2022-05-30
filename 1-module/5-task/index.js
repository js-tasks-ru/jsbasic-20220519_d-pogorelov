function truncate(str, maxlength) {
  if (str.length <= maxlength) {
    return str;
  }
  let trimmedString = str.substr(0, maxlength - 1) + "…";
  return trimmedString;
}
