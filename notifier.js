const notifier = require("node-notifier");

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

module.exports = async function (type) {
  const notification = notifications[type];
  notifier.notify({
    title: notification.pushNotification.title,
    message: notification.pushNotification.message,
  });
  for (let i = 0; i < notification.noiseLength; i++) {
    process.stdout.write("\u0007");
    await sleep(100);
  }
};
