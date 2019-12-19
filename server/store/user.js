const { User } = require('../sequelize');
const authStore = require('./auth');

class UserStore {
    
    static async createUser(req) {
        return User.create(req.body);
    }

    static async login(req) {
        const errorMessage = 'email or password was incorrect';
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email }});
        if (!user) throw Error(errorMessage);

        const isPasswordValid = await user.validPassword(password);
        if(!isPasswordValid) throw Error(errorMessage)

        const jwtToken = authStore.signJwt(user.toJSON());
        return { user: user.toJSON(), jwtToken };
    }

    static async getUsers(req) {
        const users = await User.findAll();
        return users.map(u => u.toJSON());
    }
}

module.exports = UserStore;