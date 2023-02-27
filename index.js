import express from "express";
import connectingDb from "./db/connectingDb.js";
import dontenv from "dotenv";
import goalRouter from "./routes/goalsRoutes.js";
import errorHandler from "./mdiddleWare/errorhandler.js";
import userRouter from "./routes/userRoutes.js";
const DATA_BASE_URL = "mongodb://localhost:27017/goal";
dontenv.config();
const PORT = process.env.PORT;

const app = express();

//for getting form data in body controller
app.use(express.json());

//for getting json data in body controller
app.use(express.urlencoded({ extended: false }));
connectingDb(DATA_BASE_URL);

app.use("/api/goals", goalRouter);
app.use("/api/user", userRouter);

// error handler
app.use(errorHandler);
app.listen(5000, () => {
  console.log(`sever listening at 5000}`);
});
