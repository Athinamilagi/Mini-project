import fs from "fs";

export function createUser(req, res) {
  fs.readFile("userdata.json", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return res.status(500).send("Error reading user data.");
    }

    let users = [];
    try {
      users = JSON.parse(data);
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return res.status(500).send("Error parsing user data.");
    }

    const userExist = users.find(
      (user) =>
        user.userName === req.body.userName ||
        user.userEmail === req.body.userEmail
    );
    if (userExist) {
      console.log("User already exists:", userExist);
      return res
        .status(400)
        .send("User already exists. Please try with another name or email.");
    }

    users.push(req.body);
    fs.writeFile("userdata.json", JSON.stringify(users, null, 2), (err) => {
      if (err) {
        console.error("Error writing to file:", err);
        return res.status(500).send("Error writing user data.");
      }
      console.log("User data saved successfully.");
      res.status(200).send("User data saved successfully.");
    });
  });
}

export function authenticateUser(req, res) {
  fs.readFile("userdata.json", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      res.status(500).send("Error reading user data.");
    } else {
      let users = [];
      try {
        const userData = JSON.parse(data);
        if (Array.isArray(userData)) {
          userData.forEach((user) => {
            users.push(user);
          });
        } else {
          users.push(userData);
        }
      } catch (error) {
        console.error("Error parsing JSON:", error);
        res.status(500).send("Error parsing user data.");
      }
      const userExist = users.find(
        (user) =>
          user.userPassword === req.body.userPassword &&
          user.userEmail === req.body.userEmail
      );
      if (userExist) {
        console.log("User can Login:", userExist);
        res.status(200).send("User can Login");
      } else {
        console.log("User does not exist");
        res.status(400).send("User can't Login");
      }
    }
  });
}
