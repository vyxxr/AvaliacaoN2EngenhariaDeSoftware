import { UserRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "@shared/errors/AppError";


interface IPayload {
  sub: string
}

export async function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {

  const authHeader = req.headers.authorization

  if (!authHeader) {
    throw new AppError("Token missing", 401)
  }

  const [, token] = authHeader.split(" ")

  try {
    const { sub: user_id } = verify(token, "a7e071b3de48cec1dd24de6cbe6c7bf1") as IPayload
    const usersRepository = new UserRepository()
    const user = await usersRepository.findById(user_id)
    if (!user) {
      throw new AppError("User does not exists", 401)
    }

    req.user = {
      id: user_id
    }
    return next()
  } catch (error) {
    throw new AppError("Invalid token", 401)
  }
}