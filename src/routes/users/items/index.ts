import express from "express";
import noImpl from "../../../noImpl";
import { get } from "./executor";

const router = express.Router({ mergeParams: true });
router.delete("/:itemId", noImpl);
router.get("/:itemId", get);

export default router;
