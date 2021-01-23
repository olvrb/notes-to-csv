function parseMonth(month) {
  const dateDict = {
    jan: "01",
    feb: "02",
    mar: "03",
    apr: "04",
    maj: "05",
    jun: "06",
    jul: "07",
    aug: "08",
    sep: "09",
    oct: "10",
    nov: "11",
    dec: "12"
  };
  return dateDict[month];
}
exports.parseMonth = parseMonth;
