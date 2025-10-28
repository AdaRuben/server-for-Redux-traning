const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(model) {
      this.hasMany(model.Item, {foreignKey: "user1Id", as: "Itemuser1"})
      this.hasMany(model.Item, {foreignKey: "user2Id", as: "Itemuser2"})
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    hashpass: DataTypes.TEXT, 
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};