import express from "express";
import passport from "passport";
import { getAdminUsers } from "../controllers/user.js";

const router = express.Router();

router.get("/googlelogin",
  passport.authenticate("google", {scope: ["profile"],})
);

router.get("/login", 
    passport.authenticate("google", { scope: ["profile"] }),
    (req, res) => {
      res.send("Logged In");
    }
  );

router.get("/me", getAdminUsers);

export default router;