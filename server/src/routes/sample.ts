import express from "express";
import controller from "../controllers/routes";

const router = express.Router();

router.get("/ping", controller.sampleHealth);

export = router;
