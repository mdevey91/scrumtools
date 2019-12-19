const bcrypt = require('bcrypt');

module.exports = function(sequelize, type) {
    const User = sequelize.define('User', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: type.STRING,
        },
        lastName: {
            type: type.STRING,
        },
        email: {
            required: true,
            type: type.STRING,
            unique: true
        },
        password: {
            required: true,
            type: type.STRING,
        },
        role: {
            // default: 'basic',
            type: type.ENUM,
            values: ['admin', 'basic', 'premium'],
        },
    }, {
        hooks: {
            beforeCreate: async function(user) {
                const salt = await bcrypt.genSalt(8);
                user.password = await bcrypt.hash(user.password, salt);
            }
        }
    });
    
    User.prototype.validPassword = async function (password) {
        console.log('user password in model', this.password);
        console.log(this, this.email, this.name, this.createdAt);
        return await bcrypt.compare(password, this.password);
    }

    return User;
}