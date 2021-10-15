const get = require("./get");
const post = require("./post");
const put = require("./put");
const deleteTask = require("./delete");
const getByID = require("./getByID");

module.exports = {
    paths: {
        "/todo": {
            ...get,
            ...post,
        },
        "/todo/:id": {
            ...getByID,
            ...deleteTask,
            ...put,
        }
    },
};