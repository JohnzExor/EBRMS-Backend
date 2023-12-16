import express from "express";
import {
  deleteReport,
  getReports,
  getUserReport,
  postReport,
} from "../controller/ReportsController";

export const app = express.Router();

app.get("/", getReports);
app.get("/:uid", getUserReport);
app.post("/", postReport);
app.delete("/:documentID", deleteReport);
