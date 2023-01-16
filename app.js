const http = require("http")
const { connection, sendMessage } = require("./chatfunctions")
const { sendFile } = require("./sendFile")
require("dotenv").config()

const ip = "127.0.0.1"
const port = process.env.PORT

let server = http.createServer(function(req, res) {
    
    res.setHeader("Access-Control-Allow-Origin", "*")

    console.log("request to", req.url)

    switch (req.url) {

        case "/":
        case "/index":
        case "/index.htm":
        case "/index.html":
            res.setHeader("Content-type", "text/html")
            sendFile("./chat/index.html", res)
            break;
        
        case "/connection":
            connection(req, res)
            break;

        case "/message":
            sendMessage(req, res)
            break;
        case "/bicycle1.jpg":
            res.setHeader("Content-type", "image/jpg")
            sendFile("./chat/bicycle1.jpg", res)
            break;
        default:
            res.statusCode = 404
            res.end(http.STATUS_CODES[404])
            break;
    }

}).listen(port, ip)

