const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    static associate(model) {
      this.belongsTo(model.User, {foreignKey: "user1Id", as: "user1"})
      this.belongsTo(model.User, {foreignKey: "user2Id", as: "user2"})
    }
  }
  Item.init(
    {
      title: DataTypes.STRING,
      data: DataTypes.STRING,
      user1Id: DataTypes.INTEGER,
      user2Id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Item',
    },
  );
  return Item;
};
