var socket = io();
var error = document.getElementById("error");
var memoryField = document.getElementById("memory");
var countField = document.getElementById("count");
var status = document.querySelector(".status");

socket.on("error", function (data) {
    if (data.error) {
        error.innerHTML = data.error;
        error.classList.add("has-error");
    }
})

socket.on("status-change", function (data) {
    if (data.status) {
        status.classList.add("status-on");
    } else {
        status.classList.remove("status-on");
    }
});

socket.on("monit", function (data) {
    const percentage = (data.free / data.total).toFixed(2) + "%";
    memoryField.textContent = percentage;
});

socket.on("count-change", function (data) {
    countField.textContent = data.count;
});