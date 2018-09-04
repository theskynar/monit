const winston = require("winston");

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'logs/errors.log' })
    ],
    format: winston.format.combine(
        winston.format.timestamp(), 
        winston.format.simple(), 
        winston.format.printf(info => `${info.timestamp} [${info.level}]: ${info.message}`)
    )
});

module.exports = logger;