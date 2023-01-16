/**
 * It is a custom requester for testing
 * type "$ node requester" in terminal to create an instance of client
 */



const http = require("http")
require("dotenv").config()
const port = process.env.PORT

connect()

function connect() {

    let request = http.request({
        port: port,
        host: "127.0.0.1",
        path: "/connection",
        method: "GET"
    })

    request.end()

    request.on("response", function (res) {
        console.log("\n\x1b[33m" + "new message:" + "\x1b[0m")
        res.pipe(process.stdout)
    })

    request.on("close", function () {
        connect()
    })
}

process.stdin.on("data", function (buf) {
    message(buf.toString())
})

function message(str) {
    let req = http.request({
        port: port,
        host: "127.0.0.1",
        path: "/message",
        method: "POST"
    })

    req.write(str)
    req.end()
}
