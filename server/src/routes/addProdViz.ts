import express from "express";
import controller from "../controllers/addProdViz";

const router = express.Router();

router.post("/prod/:id/:chart", controller.addProdViz);

export = router;
