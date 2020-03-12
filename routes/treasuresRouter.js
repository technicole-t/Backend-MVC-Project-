const treasuresRouter = require("express").Router();
const { requestTreasure } = require("../controllers/treasures.controller.js");

treasuresRouter.get("/", requestTreasure);

module.exports = treasuresRouter;
