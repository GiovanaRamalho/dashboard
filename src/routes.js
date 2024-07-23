import express from "express";
import userValidationRules from "../src/helpers/userValidationsRules.js";
import validate from "../src/helpers/validate.js";
import userController from "../src/controllers/userController.js";

const router = express.Router();

router.post("/users", userValidationRules, validate, userController.createUser);

export default router;
