const { User } = require('../../db/models');

class UserService {
 static async getAllUsers() {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = UserService;
