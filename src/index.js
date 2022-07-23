import express from "express";
import dotenv from "dotenv";
// import cloudinary from "./config/cloudinary.js";
import cors from "cors";

const server = express();
dotenv.config();
server.use(express.json({ limit: "30mb", extended: true }));
server.use(express.urlencoded({ limit: "30mb", extended: true }));
server.use(cors());

server.post("/image", (req, res) => {
  const user = req.body.user;
  if (!user || user !== process.env.USER) {
    res.status(403).json({ msg: "You are not authorised" });
    res.end();
    return;
  }
  const base64Data = req.body.data;

  console.log("-".repeat(90));
  res.send("POST server");
  res.end();
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, (err) => {
  if (err) return console.log(err);
  console.log(`Server listening on port: '${PORT}' at http://localhost:${PORT}`);
});
