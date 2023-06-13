import express from "express";
import authController from "../controllers/authController";
import userController from "../controllers/userController";
import passport from "passport";

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/refresh", authController.refresh);
router.post("/logout", authController.logout);
router.get(
  "/user/:id",
  passport.authenticate("jwt", { session: false }),
  userController.getUser
);
router.get("/getUsers", userController.getUsers);
router.put(
  "/updateUser",
  passport.authenticate("jwt", { session: false }),
  userController.updateUser
);

export default router;
