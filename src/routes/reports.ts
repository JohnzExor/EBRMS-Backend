import express from "express";
import {
  deleteReport,
  getReports,
  getUserReport,
  postReport,
  updateReportStatus,
} from "../controller/ReportsController";

export const app = express.Router();

app.get("/", getReports);
app.get("/:uid", getUserReport);
app.patch("/:documentID", updateReportStatus);
app.post("/", postReport);
app.delete("/:documentID", deleteReport);
