const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8080;
const usersRoute = require("./routes/usersRoute");

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

mongoose
  .connect("mongodb://localhost:27017/mydatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.use(express.json());
app.use("/user", usersRoute);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
