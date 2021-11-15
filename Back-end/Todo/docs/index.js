const basic = require("./basic");
const components = require("./components");
const server = require("./server");
const tags = require("./tags");
const crud = require("./crud");

module.exports = {
    ...basic,
    ...components,
    ...server,
    ...tags,
    ...crud,
}