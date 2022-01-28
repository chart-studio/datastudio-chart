import express from "express";
import controller from "../controllers/deleteTestViz";

const router = express.Router();

router.post("/deletetest/:date", controller.deleteTestViz);

export = router;
