function parseMonth(month) {
  const dateDict = {
    jan: "01",
    feb: "02",
    mar: "03",
    apr: "04",
    maj: "05",
    jun: "06"
  };
  return dateDict[month];
}
exports.parseMonth = parseMonth;
