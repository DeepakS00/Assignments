import express, { Application } from "express";
import { sequelizeConnection as db } from "./src/utils/database";
import { router as blog } from "./src/routes/blog-route";
import { router as user } from "./src/routes/user-route";
import { router as upload } from "./src/routes/uploads";
import config from "./src/config/config";
import { config as dotenv } from "dotenv";

dotenv();
const app: Application = express();
const port = config.server.port;

db.sync({
    force: true
});

app.use(express.json());  
app.use("/blog", blog);
app.use("/user", user);
app.use("/upload", upload);
app.set("view engine", "ejs");

app.get("/", (_req, res) => {
    res.render("index", { title: "Home" });
});

app.listen(port, () => {
    console.log(`The server is running at http://${config.server.host}:${port}/`);
});
