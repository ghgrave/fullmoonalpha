
const express = require("express");
const app = express();
app.use(express.static("public"));

const path = require("path");

// const logger = require("morgan");
// app.use(logger("dev"));

app.set("view engine", "ejs");

// Mongo connection
require("./api/services/mongoConnection")();

const indexRoutes = require("./api/routes/indexRoutes");
const homeRoutes = require("./api/routes/homeRoutes");
const entertainmentRoutes = require("./api/routes/entertainmentRoutes");
const imagesRoutes = require("./api/routes/imagesRoutes");
const legendsRoutes = require("./api/routes/legendsRoutes");

app.use("/", indexRoutes);
app.use("/home", homeRoutes);
app.use("/entertainment", entertainmentRoutes);
app.use("/images", imagesRoutes);
app.use("/legends", legendsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`App on port ${PORT}`));
