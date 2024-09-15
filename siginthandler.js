const { getStart, getWorkCount, getBreakCount } = require("./pomodoro");

module.exports = function () {
  let stdin = process.stdin;
  stdin.on("data", (key) => {
    if (key == "\u0003") {
      console.log("\nGoodbye...");
      console.log("Started at:", getStart());
      console.log("Work sessions:", getWorkCount());
      console.log("Break sessions:", getBreakCount());
      console.log("Ended at:", new Date().toLocaleTimeString());
      process.exit();
    }
  });
};
