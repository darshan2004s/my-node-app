const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from CI/CD Pipeline Deployment! this is done by Darshan S 22011102014 IoT-A");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
