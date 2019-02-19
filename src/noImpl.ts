import express from "express";

export default function (
    req: express.Request,
    res: express.Response,
    next?: express.NextFunction,
): void {
  res.status(501).json({ message: "Not Implemented" });
}
