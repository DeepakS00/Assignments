require("dotenv").config();

const express = require("express");
const db = require("./src/utils/database");
const todo = require("./src/routes/todo");
const swaggerUI = require("swagger-ui-express");
const docs = require("./docs");
const multer = require("multer");
const app = express();
const port = process.env.PORT || 1998;
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "---" + file.originalname);
  },
});
const upload = multer({ storage: fileStorage });

db.sync({
  alter: true, // this will drop if any and create new one
}).then(() => console.log("created"))
  .catch((err) => console.log("Error:" + err));

app.set("view engine", "ejs");
app.use(express.json());
app.use("/todo", todo);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(docs));

app.post("/single", upload.single("image"), (req, res) => {
  console.log(req.file);
  res.send("Single file uploaded");
});

app.post("/multiple", upload.array("images", 4), (req, res) => {
  console.log(req.file);
  res.send("Multiple files uploaded");
});

app.get("/", (_req, res) => {
  res.render("index", { title: "Home" });
});

app.listen(port, "localhost", () => {
  console.log(`The server is now running at http://localhost:${port}/`);
});
