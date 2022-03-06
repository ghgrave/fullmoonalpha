require("dotenv").config();
const { MONGO_URI, DB } = process.env;

// creates the connection of index.js with mongodb
const connection = () => {
  mongoose
    .connect(MONGO_URI)
    .then(() => console.log(`Connected to ${DB} database.`))
    .catch((err) =>
      console.error(`Error connecting to ${DB} database: ${err}`)
    );
};

module.exports = connection;
