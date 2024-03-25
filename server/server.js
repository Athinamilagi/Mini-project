import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { authenticateUser, createUser } from "./api.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

export default function server() {
  app.post("/signup", (req, res) => {
    createUser(req, res);
  });
  app.post("/login", (req, res) => {
    authenticateUser(req, res);
  });
  app.listen(8080, () => {
    console.log("Server is running on port 8080");
  });
}
