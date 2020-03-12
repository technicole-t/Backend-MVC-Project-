const client = require("../db/connection.js");

const getTreasure = () => {
  return client
    .select(
      "treasure_id",
      "treasure_name",
      "colour",
      "age",
      "cost_at_auction",
      "shop_name"
    )
    .from("treasures")
    .join("shops", "treasures.shop_id", "shops.shop_id");
};

module.exports = { getTreasure };
