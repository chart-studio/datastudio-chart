import { Request, Response } from "express";
import { copyFileBucket } from "../../helper/copyFiles";
import logging from "../config/logging";

const NAMESPACE = "addProdViz Controller";
const projectDirectory = "visualisations/test";
const listChartsDirectory = ["funnel_one", "timebrush_one", "timebrush_two"];

const addProdViz = async (req: Request, res: Response) => {
  try {
    const selectedChart = req.params.chart;
    if (listChartsDirectory.includes(selectedChart)) {
      const chartProjectDirectory = `${projectDirectory}/${selectedChart}`;
      const destBucketName = `visualisations/prod/subsc/${req.params.id}/${req.params.chart}`;
      await copyFileBucket(chartProjectDirectory, destBucketName);
      logging.info(NAMESPACE, "api/prod/:id/:chart");
      return res.status(200).json({
        message: req.params.id,
        destBucketName
      });
    }
  } catch (error) {
    console.error("ERROR:", error);
  }
};

export default { addProdViz };
