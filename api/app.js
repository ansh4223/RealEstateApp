import express from "express";
import authRoute from "./routes/post.route.js";
import postRoute from "./routes/post.route.js";

const app = express();

app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);

app.listen(5500, () => {
    console.log("Server is running");
})