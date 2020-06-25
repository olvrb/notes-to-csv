const fs = require("fs");
const { parseMonth } = require("./parseMonth");
async function main() {
  const file = fs.readFileSync("./input.notes").toString();
  const times = file.split("\n");
  console.log(times);
  let allHour1 = "";
  let allHour2 = "";
  let allDate = "";
  for (const time of times) {
    const arr = time.split(" ");
    // get the hour, split later
    const hours = arr[0];
    const hoursSplit = hours.split("-");
    const hour1 = hoursSplit[0];
    const hour2 = hoursSplit[1];

    // add to final string
    allHour1 += `${hour1},`;
    allHour2 += `${hour2},`;

    // get the date number and date month, concat
    const dateNumber = arr[1];
    const dateMonth = arr[2];

    const dateMonthParsed = parseMonth(dateMonth);
    allDate += `${dateNumber}-${dateMonthParsed},`;
  }
  const csvOut = `${allDate}\n${allHour1}\n${allHour2}`;
  fs.writeFileSync("./out.csv", csvOut);
}
main();
