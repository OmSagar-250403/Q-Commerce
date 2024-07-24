import express, { urlencoded } from "express";
import dotenv from "dotenv";
import { connectPassport } from "./utils/Authorization.js";
import session from "express-session";
import passport from "passport";

const app = express()

dotenv.config({
  path: "./config/config.env",
});

export default app;

app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
    })
  );


app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());

connectPassport();


// Importing Routes
import userRoute from "./routes/user.js";
//import orderRoute from "./routes/order.js";

app.use("/api/v1", userRoute);
//app.use("/api/v1", orderRoute);