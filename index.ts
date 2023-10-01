import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
const cors = require("cors");

dotenv.config();
const port = process.env.PORT;

const app: Express = express();

app.use(cors());

// Connect to the MongoDB database
mongoose.connect("mongodb://localhost:27017/your_database_name", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true // To avoid deprecation warnings
});

// Handle connection events
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB");
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world typescript is working now. ");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
