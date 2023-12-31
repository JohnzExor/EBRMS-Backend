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
app.get("/", (request, response) => {
  response
    .status(200)
    .send("Employee Behavior Reporting and Monitoring System API");
});

app.listen(PORT, () => {
  console.log("app is listening to PORT:", PORT);
});
export default app;
