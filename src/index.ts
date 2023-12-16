import express, { request } from "express";
import cors from "cors";
import { app as usersRoute } from "./routes/users";
import { app as reportsRoute } from "./routes/reports";
import { PORT } from "../config";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", usersRoute);
app.use("/reports", reportsRoute);

app.listen(PORT, () => {
  console.log("app is listening to PORT:", PORT);
});
