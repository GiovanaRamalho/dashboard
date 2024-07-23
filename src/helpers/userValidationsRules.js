import { body } from "express-validator";

const userValidationRules = [
  body("name")
    .isString()
    .withMessage("Name is required")
    .notEmpty()
    .withMessage("Name cannot be empty"),
  body("email")
    .isEmail()
    .withMessage("Invalid email format")
    .notEmpty()
    .withMessage("Email is required"),
  body("password")
    .isString()
    .withMessage("Password is required")
    .notEmpty()
    .withMessage("Password cannot be empty"),
];

export default userValidationRules;
