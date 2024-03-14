import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import main from "./server.js"
const app = express();
app.use(cors());
app.use(bodyParser.json());



app.post("/login", function (req, res) {
  const data = {
    username: req.body.userName,
    useremail: req.body.userEmail,
    userpassword: req.body.userPassword
  }
  main(data);
  res.send({
    message: "Recieved Succesfully",
  });
});
const PORT = 3000;
app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
