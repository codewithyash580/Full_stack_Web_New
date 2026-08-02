import express from "express"
import {
    logUser,
    registerUser,
} from "../controllers/authController";

const express = express.Router();

Router.post("/register",registerUser);
Router.post("/login",loginUser)

export default router;