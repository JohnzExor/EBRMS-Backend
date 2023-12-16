import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();

export const getUsers = async (req: Request, res: Response) => {
  const users = await prisma.users.findMany({});
  res.status(200).send(users);
};

export const createUser = async (req: Request, res: Response) => {
  const { email, isRegistered, isSuperUser, password, status } = req.body;
  const user = await prisma.users.create({
    data: {
      email: email,
      isRegistered: isRegistered,
      isSuperUser: isSuperUser,
      password: password,
      status: status,
    },
  });
  res.status(200).send(user);
};

export const deleteUser = async (req: Request, res: Response) => {
  const user = await prisma.users.delete({
    where: {
      uid: Number(req.params.uid),
    },
  });
  res.status(200).send(user);
};
