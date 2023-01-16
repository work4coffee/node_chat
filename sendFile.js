const fs = require("fs");
const { STATUS_CODES } = require("http");

function sendFile(path, res) {

    let fileStream = new fs.ReadStream(path);

    fileStream.pipe(res);


    fileStream.on("error", function (err) {
        console.error(err);
        res.status = 500;
        res.end(STATUS_CODES[500]);
    });


    res.on("close", function () {
        fileStream.destroy();
    });
    
}
exports.sendFile = sendFile;
