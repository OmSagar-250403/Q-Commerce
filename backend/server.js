import app from "./app.js";
import { connectDB } from "./config/db.js";
import Razorpay from "razorpay";

// Connect to mongoDB
connectDB;

app.get("/", (req, res, next) => {
    res.send("<h1>Working</h1>");
  });
  
app.listen(process.env.PORT, () =>
    console.log(`Server is working on PORT: ${process.env.PORT}`)
);

