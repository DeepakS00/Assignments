import express, { Request, Response, Application } from "express";
import dotenv from "dotenv";
dotenv.config();
import {sequelizeConnection as db} from "./src/utils/config";
import {router as blog} from "./src/routes/blog-route";

const app: Application = express();
const port = process.env.DB_PORT;

db.sync({
    alter: true
}).then(() => console.log("Connected to the database"))
  .catch((err:Error) => console.log(err));

app.use(express.json());  
app.use("/", blog);

app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}/`);
});
