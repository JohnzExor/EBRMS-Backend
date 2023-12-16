import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

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

export const deleteReport = async (req: Request, res: Response) => {
  const report = await prisma.reports.delete({
    where: {
      documentID: Number(req.params.documentID),
    },
  });
  res.status(200).send(report);
};
