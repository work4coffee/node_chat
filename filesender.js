const http = require("http")
const fs = require("fs")
const {parseURLSearch} = require("./parseURLSearch")
const { sendFile } = require("./sendFile")
const ip = "127.0.0.1"
const port = 1337

let server = new http.Server()

server.listen(port, ip)

server.on("request", function(req, res) {
    
    let request_url = new URL(`http://${ip}:${port}${req.url}`)

    if(request_url.pathname !== "/sample") {
        res.status = 404
        res.end("Not found")
        return
    }

    if (parseURLSearch(request_url.search).password !== "fgh") {
        res.status = 403
        res.end("No permission")
        return
    }

    res.setHeader("Content-type", "text/html")
    sendFile("./files/sample.html", res)
})


