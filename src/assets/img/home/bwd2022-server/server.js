const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
require("dotenv").config();

const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({credentials: true, origin: true}))
app.use(routes);

const connection = `mongodb://localhost:27017/bwd2022`;
mongoose
  .connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Database Connected Successfully"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
