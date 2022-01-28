import { Request, Response } from "express";
import logging from "../config/logging";

const NAMESPACE = "Sample Controller";

const sampleHealth = (req: Request, res: Response) => {
  logging.info(NAMESPACE, "Sample health route called yves");
  return res.status(200).json({
    message: "Pong"
  });
};

export default { sampleHealth };
