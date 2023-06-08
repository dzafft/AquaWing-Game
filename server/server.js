const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8080;
const usersRoute = require("./routes/usersRoute");
const cors = require("cors");
const mongoose = require("mongoose");

app.use(
  cors({
    origin: "https://aqua-wing-client.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use("/", usersRoute);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening on port:${PORT}`);
    });
  })
  .catch((err) => console.log("DB Connection Error: ", err.message));
