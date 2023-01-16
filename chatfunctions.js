let clients = []


function connection(req, res) {


    clients.push(res)

    console.log("new connection", clients.length)


    res.on("close", function() {

        clients.splice(clients.indexOf(res), 1)

        console.log("connection closed", clients.length)
        
    })

}


function sendMessage(req, res) {

    clients.forEach(function(client) {

        req.pipe(client)


        req.on("error", function(err) {

            console.error(err)

            client.status = 500
            client.end("Server error")

        })

        client.on("finish", function() {
            res.end("")
        })

    })

    clients = []

}

exports.connection  = connection;
exports.sendMessage = sendMessage;
