const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const compression = require("compression");
const path = require("path");
const app = require("express")();

const config = require("./config");

const todo = require("./routes/todo");

app.listen(8000);

mongoose.connect(
  config.database,
  {
    useCreateIndex: true,
    useNewUrlParser: true
  },
  (err, database) => {
    if (err) {
      console.log(err);
    } else {
      console.log("MongoDB is connected!");
    }
  }
);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE");
  next();
});
app.use(morgan("tiny"));
app.use(express.static(path.join("public")));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);
app.use(compression());

app.use("/api", todo);
