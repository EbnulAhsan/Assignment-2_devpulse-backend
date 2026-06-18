import express from "express";
import serverless from "serverless-http";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("DevPulse API is running ✅");
});

app.get("/api/test", (req, res) => {
    res.json({ message: "API working ✅" });
});

export default serverless(app);