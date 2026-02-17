const chalk = require("chalk");

module.exports = {
  info: (msg) =>
    console.log(chalk.cyan("[INFO]"), msg),

  success: (msg) =>
    console.log(chalk.green("[SUCCESS]"), msg),

  warn: (msg) =>
    console.log(chalk.yellow("[WARN]"), msg),

  error: (msg) =>
    console.log(chalk.red("[ERROR]"), msg),

  critical: (msg) =>
    console.log(chalk.bgRed.white.bold("[CRITICAL]"), msg),
};
