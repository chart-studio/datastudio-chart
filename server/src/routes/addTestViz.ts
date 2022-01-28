import express from "express";
import controller from "../controllers/addTestViz";

const router = express.Router();

router.post("/test/:id/:chart", controller.addTestViz);

export = router;
