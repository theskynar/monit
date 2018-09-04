const { server } = require("../server");
const logger = require("./log-service");
const io = require("socket.io")(server);

io.on("connection", (socket) => {
    logger.info("User connected");
    socket.on("disconnect", () => logger.info("User disconnected"));
});

module.exports = io;