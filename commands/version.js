const { getVersion } = require("../utils/version")

async function version() {
    const result = await getVersion()
    console.log(result)
}

module.exports = version;