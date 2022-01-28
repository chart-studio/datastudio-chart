import http from "http";
import express from "express";
import logging from "./config/logging";
import config from "./config/config";
import sampleRoute from "./routes/sample";
import addTestVizRoute from "./routes/addTestViz";
import addProdVizRoute from "./routes/addProdViz";
import deleteTestVizRoute from "./routes/deleteTestViz";

const NAMESPACE = "Server";
const router = express();

/** logging the request */
router.use((req, res, next) => {
  logging.info(
    NAMESPACE,
    `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`
  );
  res.on("finish", () => {
    logging.info(
      NAMESPACE,
      `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`
    );
  });
  next();
});

/**Parse the request */
router.use(express.urlencoded({ extended: false }));
router.use(express.json());

/**Rules of Api */
router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-control-Allow-Methods", "GET PATCH DELETE POST PUT");
    return res.status(200).json({});
  }
  next();
});

/** Routes */
router.use("/sample", sampleRoute);
router.use("/api", addTestVizRoute);
router.use("/api", addProdVizRoute);
router.use("/api", deleteTestVizRoute);
// router.use("/api", addProdViz);
// router.use("/api", deleteProdViz);

/** Error Handler */
router.use((req, res, next) => {
  const error = new Error("Not found");
  return res.status(404).json({
    message: error.message
  });
  next();
});

/** Create a server */
const httpServer = http.createServer(router);
httpServer.listen(config.server.port, () =>
  logging.info(
    NAMESPACE,
    `Server running on http://${config.server.hostname}:${config.server.port}`
  )
);
