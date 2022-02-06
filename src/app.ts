import express from "express";
import "express-async-errors";
import cors from "cors";
import { middlewareError } from "./middleware/middlewareError";
import { router } from "./routes/index";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use(middlewareError);

export default app;
