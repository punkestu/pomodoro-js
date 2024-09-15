const { Command } = require("commander");

const { pomodoro } = require("./pomodoro");
const siginthandler = require("./siginthandler");

siginthandler();

const program = new Command("Pomodoro");
program
  .option("-w, --work [number]", "Duration of work in minutes")
  .option("-b, --break [number]", "Duration of break in minutes")
  .action(async (options) => {
    const work = parseInt(options.work) || 25;
    const breakTime = parseInt(options.break) || 5;
    pomodoro(work, breakTime);
  })
  .parse(process.argv);
