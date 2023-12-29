import { Request, Response } from "express";
import prisma from "../../prisma/db";

export const getReports = async (req: Request, res: Response) => {
  const reports = await prisma.reports.findMany({});
  res.status(200).send(reports);
};

export const getUserReport = async (req: Request, res: Response) => {
  const reports = await prisma.reports.findMany({
    where: {
      uid: Number(req.params.uid),
    },
  });
  res.status(200).send(reports);
};

export const postReport = async (req: Request, res: Response) => {
  const {
    uid,
    createTimeAt,
    createdDateAt,
    dateAndTime,
    details,
    fileStatus,
    nameToReport,
    placeOfTheEvent,
    status,
    violation,
  } = req.body;

  const report = await prisma.reports.create({
    data: {
      uid: uid,
      createTimeAt: createTimeAt,
      createdDateAt: createdDateAt,
      dateAndTime: dateAndTime,
      details: details,
      fileStatus: fileStatus,
      nameToReport: nameToReport,
      placeOfTheEvent: placeOfTheEvent,
      status: status,
      violation: violation,
    },
  });
  res.status(200).send(report);
};

export const updateReportStatus = async (req: Request, res: Response) => {
  const documentID = req.params.documentID;
  const report = await prisma.reports.updateMany({
    where: { documentID: Number(documentID) },
    data: { status: req.body.status },
  });
  res.status(200).send(report);
};

export const deleteReport = async (req: Request, res: Response) => {
  const report = await prisma.reports.delete({
    where: {
      documentID: Number(req.params.documentID),
    },
  });
  res.status(200).send(report);
};
