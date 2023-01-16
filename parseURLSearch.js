const { decode } = require("url-encode-decode");

function parseURLSearch(query) {

    let search_parser_regex = /[\?\=]/gi

    let queryURLDecoded = decode(query);

    let queryParsed = queryURLDecoded.split(search_parser_regex);

    queryParsed.shift();

    let entries = [];

    for (let i = 0; i < queryParsed.length; i += 2) {
        entries.push(queryParsed.slice(i, i + 2));
    }

    return Object.fromEntries(entries);
}
exports.parseURLSearch = parseURLSearch;
