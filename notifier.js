const notifier = require("node-notifier");
const childProcess = require("child_process");

async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const notifications = {
  work: {
    pushNotification: {
      title: "Work session",
      message: "Time to work!",
    },
    noiseLength: 5,
  },
  break: {
    pushNotification: {
      title: "Break session",
      message: "Time to take a break!",
    },
    noiseLength: 10,
  },
};

module.exports = function (type) {
  const notification = notifications[type];
  notifier.notify({
    title: notification.pushNotification.title,
    message: notification.pushNotification.message,
  });
  childProcess.exec(`play ${__dirname}/sounds/${type}.wav`);
};
