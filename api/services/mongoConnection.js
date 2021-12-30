const mongoose = require("mongoose");

// Get database info for connecting
const keys = require("../../config/keys");

// creates the connection of index.js with mongodb
const connection = () => {
  mongoose
    .connect(keys.mongoURI)
    .then(() => console.log(`Connected to ${keys.db} database.`))
    .catch((err) =>
      console.error(`Error connecting to ${keys.db} database: ${err}`)
    );
};

module.exports = connection;
