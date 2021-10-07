"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config_1 = require("./src/utils/config");
const blog_route_1 = require("./src/routes/blog-route");
const app = (0, express_1.default)();
const port = process.env.DB_PORT;
config_1.sequelizeConnection.sync({
    alter: true
}).then(() => console.log("Connected to the database"))
    .catch((err) => console.log(err));
app.use(express_1.default.json());
app.use("/", blog_route_1.router);
app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}/`);
});
