import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import router from "./routes/index.js";
dotenv.config();
const app = express();
import bodyParser from "body-parser";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(router);
app.use(bodyParser.json({}));
app.use("/public/file", express.static("file")); // Serve static files from uploads folder

const { PORT = 8000 } = process.env;

app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
