const apiRouter = require("express").Router();
const treasuresRouter = require("./treasuresRouter.js");

apiRouter.use("/treasures", treasuresRouter);

module.exports = apiRouter;
