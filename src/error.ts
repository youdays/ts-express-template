import express from "express";

interface Error {
  status?: number;
  message?: string;
}

export default function (
    err: Error,
    req: express.Request,
    res: express.Response,
) {
  res.status(501).json({ message: "any error" });
}
