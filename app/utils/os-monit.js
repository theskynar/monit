const os = require("os");
const io = require("./socket-emitter");
const logger = require("./log-service");
const cron = require('node-cron');

function initMonit() {
    cron.schedule("*/5 * * * * *", () => {
        const free = os.freemem();
        const total = os.totalmem();
        const percentage = free / total;

        if (percentage >= 80) {
            logger.warn(`The ram memory is higher, value: ${percentage}%`);
        }

        io.emit("monit", {
            free: os.freemem(),
            total: os.totalmem()
        });
    });
}

module.exports = {
    initMonit
};