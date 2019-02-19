import express from "express";

export const get =
    (req: express.Request, res: express.Response, next?: express.NextFunction): void => {
      res.status(200).json({ userId: req.params.userId, itemId: req.params.itemId });
    };
