import express from "express";
import bodyParser from "body-parser";
import userRouter from "./routers/index.js";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use("/", userRouter);

app.listen(PORT, () => console.log("server runing at port : " + PORT));
