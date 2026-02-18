const packageJson = require("../package.json")
const logger = require("./logger")
const chalk = require("chalk")
const { get } = require("mongoose")

const cVersion = packageJson.version

async function getVersion() {
    try {
        const res = await fetch(`https://registry.npmjs.org/${packageJson.name}/latest`);
        if (!res.ok) return logger.error("Failed to fetch from npm registry.");

        const current = chalk.bold.cyan("npmsecure: ") + chalk.gray(`${cVersion}`);
        const rVersion = await res.json().version;

        if(rVersion!=cVersion) {
            return (
                current+
                "\n"+
                logger.warn(`New version available! Current: ${chalk.gray(cVersion)}, Latest: ${chalk.bold.cyan(rVersion)}`)
            )
        }
        return (
            current+
            "\n"+
            logger.success(`You are using the latest version!`)
        )
    } catch (e) {
        return logger.error("Failed to fetch from npm registry");
    }
}


module.exports = { getVersion }