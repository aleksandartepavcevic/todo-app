const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const todosRouter = require("./routes/todos");

dotenv.config({ path: ".env" });

const app = express();
const port = process.env.PORT || 3001;

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

app.use(todosRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
