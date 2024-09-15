const notifier = require("./notifier");

var isWork = false;
var ticker;
var tickCount = 0;

var startAt = new Date().toLocaleTimeString();
var workCount = 0;
var breakCount = 0;

function pomodoro(work, breakTime) {
  if (ticker) {
    if (isWork) workCount++;
    else breakCount++;
    process.stdout.write("E");
    tickCount = 0;
    clearInterval(ticker);
  }
  isWork = !isWork;
  if (isWork) {
    notifier("work").then();
    console.log(" |Work started:", new Date().toLocaleTimeString());
    setTimeout(() => pomodoro(work, breakTime), work * 60 * 1000);
  } else {
    notifier("break").then();
    console.log(" |Break started:", new Date().toLocaleTimeString());
    setTimeout(() => pomodoro(work, breakTime), breakTime * 60 * 1000);
  }
  process.stdout.write("S");
  ticker = setInterval(
    () => {
      if (tickCount > 0 && tickCount % 10 === 0) {
        process.stdout.write("H");
      } else {
        process.stdout.write(".");
      }
      tickCount++;
    },
    isWork ? (work * 60 * 1000) / 20 : (breakTime * 60 * 1000) / 20
  );
}

module.exports = {
  pomodoro,
  getStart: () => startAt,
  getWorkCount: () => workCount,
  getBreakCount: () => breakCount,
};
