const { ownerData, shopData, treasureData } = require("../index.js");

exports.seed = function(knex) {
  return knex
    .insert(ownerData)
    .into("owners")
    .returning("*")
    .then(result => {
      const shop = shopData.map(shop => {
        const ownerMatch = result.find(owner => owner.forename === shop.owner);
        const shopObj = { ...shop };
        shopObj.owner_id = ownerMatch.owner_id;
        delete shopObj.owner;
        return shopObj;
      });
      return knex
        .insert(shop)
        .into("shops")
        .returning("*")
        .then(results => {
          const treasure = treasureData.map(tres => {
            const tresMatch = results.find(
              shops => shops.shop_name === tres.shop
            );
            const tresObj = { ...tres };
            tresObj.shop_id = tresMatch.shop_id;
            delete tresObj.shop;
            return tresObj;
          });

          return knex
            .insert(treasure)
            .into("treasures")
            .returning("*");
        });
    });
};
