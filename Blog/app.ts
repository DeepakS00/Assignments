import express, { Application } from "express";
import { sequelizeConnection as db } from "./src/utils/database";
import { router as blog } from "./src/routes/blog-route";
import { router as user } from "./src/routes/user-route";
import config from "./src/config/config";

const app: Application = express();
const port = config.server.port;

db.sync({
    alter: true
});

app.use(express.json());  
app.use("/blog", blog);
app.use("/user", user);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("layout");
});

app.listen(port, () => {
    console.log(`The server is running at http://${config.server.host}:${port}/`);
});
