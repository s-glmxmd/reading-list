const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const port = 8000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/books"));
// get driver connection
const dbo = require("./connection");

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);

  });
  console.log(`Server is running on port: ${port}`);
});