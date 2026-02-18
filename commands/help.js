const chalk = require("chalk");
const { getVersion } = require("../utils/version")

async function help() {
  const version = await getVersion()
  process.stdout.write("\x1Bc");

  console.log(
    chalk.bold.cyan("npmsecure") +
    chalk.gray(" - License & security guard for npm install ")  +
    chalk.gray("(by ") + chalk.cyan("@bulutmuf") + chalk.gray(")")
  );
  console.log("");

  console.log(chalk.cyanBright.bold("Usage:"));
  console.log("  npmsecure <command> [options]");
  console.log("");

  console.log(chalk.cyanBright.bold("Commands:"));
  console.log("  help        Show this help");
  console.log("  version     Show current version");
  console.log("");

  console.log(version)

}

module.exports = help;
