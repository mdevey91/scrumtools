const userStore = require('../store/user');

class AccountController {
  static async register(req, res, next) {
    try {
      const user = await userStore.createUser(req);
      res.json({ success: true, user })
    } catch(error) {
      res.status(500).send({ success: false, msg: error.message })
    }
  }

  static async login(req, res) {
    try {
      const { user, jwtToken } = await userStore.login(req);
      res.json({ success: true, user, jwtToken });
    } catch(error) {
      res.status(500).send({ success: false, msg: error.message });
    }
  }

  static async users(req, res) {
    console.log('called users');
    const users = await userStore.getUsers();
    res.json(users);
  }
}

module.exports = AccountController;