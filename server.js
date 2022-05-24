/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors")

const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(cors())
// Add routes, both API and view
app.use(routes);

const connection = `mongodb+srv://lethanhdat:0388121738@bigproject.6rkws.mongodb.net/?retryWrites=true&w=majority`;
mongoose
  .connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Database Connected Successfully"))
  .catch((err) => console.log(err));

// mongoose.set("useFindAndModify", false);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
