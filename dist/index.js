"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors = require("cors");
dotenv_1.default.config();
const port = process.env.PORT;
const app = (0, express_1.default)();
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
app.get("/", (req, res) => {
    res.send("Hello world typescript is working now. ");
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
