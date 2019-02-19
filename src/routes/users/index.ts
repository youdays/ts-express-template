import express from "express";
import noImpl from "../../noImpl";
import items from "./items";

const router = express.Router();

router.delete("/", noImpl);

router.use("/:userId/items", items);

export default router;
