const express = require("express");

const { body, validationResult } = require("express-validator"); //ye likhana padata hai

const User = require("../models/user.models");

const router = express.Router();

// see Dhaval Sir video around 1:47: 00 min to 1:50 : 00 regarding strong password validation and confirm password validation

router.post(
  "",

  body("first_name")
    .not()
    .isEmpty()
    .withMessage("first name is required and should not be empty"),
  body("last_name")
    .not()
    .isEmpty()
    .withMessage("Last Name should not be empty!!"),
  body("email")
    .isEmail()
    .withMessage("Please enter valid email address")
    .custom(async () => {
      const user = await User.findOne({ email: value });

      if (user) {
        throw new Error("Email is already taken");
      } else {
        return true;
      }
    }),
  body("pincode")
    .not()
    .isEmpty()
    .withMessage("pincode should not be empty")
    .isLength({ min: 6, max: 6 })
    .withMessage("Pincode should consist of 6 digits"),
  body("age")
    .not()
    .isEmpty()
    .withMessage("age should not be empty")
    .isNumeric()
    .withMessage("Age must be number")
    .isInt({ min: 1, max: 100 })
    .withMessage("Age should between 1 to 100"),
  body("gender").custom((value) => {
    if (value == "Male" || value == "Female" || value == "Others") {
      return true; // return true is very important while writing custom validators
    }
    throw new Error("Please enter the valid gender");
  }),

  async (req, res) => {
    try {
      console.log(body("first_name")); //  esse you will get how many validators are there. Very Important

      const errors = validationResult(req);
      console.log({ errors });
      if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() });
      }

      const user = await User.create(req.body);

      return res.status(201).send({ user: user });
    } catch (error) {
      return res.status(500).send({ message: error });
    }
  }
);

module.exports = router;
