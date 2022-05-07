const path = require("path");
const express = require("express");
const connectDB = require("./backend/config/db");

const port = 6969;
const app = express();

connectDB();
app.listen(port);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./backend/routes/viewRoute"));
app.use("/upload", require("./backend/routes/uploadRoute"));
app.use("/api/users", require("./backend/routes/userRoutes"));
app.use("/post", require("./backend/routes/postRoute"));
app.use("/post-image", require("./backend/routes/uploadPostRoute"));
app.use("/getAllPosts", require("./backend/routes/postRoute"));
app.use("/delete-post", require("./backend/routes/postRoute"));
app.use("/add-comment", require("./backend/routes/postRoute"));
app.use("/get-post", require("./backend/routes/postRoute"));
app.use("/post", require("./backend/routes/postRoute"));
app.use("/comment", require("./backend/routes/commentsRoute"));
app.use("/avatars", require("./backend/routes/avatarsRoute"));

app.use("/src", express.static(path.join(__dirname, "src")));
app.use("/public", express.static(path.join(__dirname, "public")));
