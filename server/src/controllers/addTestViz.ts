import { Request, Response } from "express";
import { date_YYYY_MM_DD } from "../../helper/date_YYYY_MM_DD";
import logging from "../config/logging";
import { copyFileBucket } from "../../helper/copyFiles";

const NAMESPACE = "addTestViz Controller";
const projectDirectory = "visualisations/test";
const listChartsDirectory = ["funnel_one", "timebrush_one", "timebrush_two"];

const addTestViz = async (req: Request, res: Response) => {
  try {
    const selectedChart = req.params.chart;
    if (listChartsDirectory.includes(selectedChart)) {
      const chartProjectDirectory = `${projectDirectory}/${selectedChart}`;
      const newDate = new Date();
      const newDateTransf = date_YYYY_MM_DD(newDate);
      //verifier que le fichier existe
      const destBucketName = `visualisations/prod/try/${newDateTransf}/${req.params.chart}/${req.params.id}`;
      await copyFileBucket(chartProjectDirectory, destBucketName);

      logging.info(NAMESPACE, "api/test/:id/:chart");
      return res.status(200).json({
        message: req.params.id,
        destBucketName
      });
    }
  } catch (error) {
    console.error("ERROR:", error);
  }
};

export default { addTestViz };
