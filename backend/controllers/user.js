import { User } from "../models/User.js";

export const getAdminUsers = (req, res, next) => {
    res.status(200).json({
      success: true,
      user: req.user,
    });
  };