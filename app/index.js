const { server } = require("./server");
const { initMonit } = require("./utils/os-monit");
const io = require("./utils/socket-emitter");
const port = process.env.PORT || 3000;
initMonit();

// io.emit("error", { error: "Error here" }) => On error.
// io.emit("status-change", { status: true | false }) => On init/finish process.
// io.emit("count-change", { count: 0 }) => On count change.

server.listen(port, () => console.log(`Server listening in port: ${port}`));