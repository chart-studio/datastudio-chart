import { Request, Response } from "express";
//import { date_YYYY_MM_DD } from "../../helper/date_YYYY_MM_DD";
import logging from "../config/logging";
import { deleteFileBucket } from "../../helper/deleteFiles";

const NAMESPACE = "deleteTestViz Controller";

const deleteTestViz = async (req: Request, res: Response) => {
  try {
    const date = req.params.date;
    if (date.length === 10) {
      const directoryToDelete = `visualisations/prod/try/${date}`;
      // const newDate = new Date();
      // const newDateTransf = date_YYYY_MM_DD(newDate);
      //verifier que le fichier existe
      await deleteFileBucket(directoryToDelete);

      logging.info(NAMESPACE, "api/test/:id/:chart");
      return res.status(200).json({
        message: req.params.id,
        delete: true
      });
    }
  } catch (error) {
    console.error("ERROR:", error);
  }
};

export default { deleteTestViz };
