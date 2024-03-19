import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

export default function server() {
  app.post("/signup", (req, res) => {
    console.log(req.body);
  });
  app.post("/login", (req, res) => {
    console.log(req.body);
  });
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
}
