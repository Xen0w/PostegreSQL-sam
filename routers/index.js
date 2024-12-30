import express from "express";
import { Router } from "express";
const userRouter = express.Router();
import {
    getAllUsers,
    getNewUserForm,
    saveUser,
} from "../controllers/userController.js";

userRouter.get("/", getAllUsers);
userRouter.get("/new", getNewUserForm);
userRouter.post("/new", saveUser);

export default userRouter;
