import { Request, Response, NextFunction } from "express";

export function notFound(req: Request, res: Response, next: NextFunction) {

  res.status(404);
  next(new Error("Not found"));
}