const mongoose = require("mongoose");
require('dotenv').config();

function connectToDb() {
  return mongoose.connect(process.env.URL);
}

module.exports = {
  connectToDb,
};
