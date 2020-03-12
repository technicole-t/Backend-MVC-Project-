const { getTreasure } = require("../models/treasures.models.js");

const requestTreasure = (req, res, next) => {
  getTreasure()
    .then(treasures => {
      res.status(200).send({ treasures });
    })
    .catch(console.log);
};

module.exports = { requestTreasure };
