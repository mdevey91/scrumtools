module.exports = (sequelize, type) => {
    return sequelize.define('note', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        text: type.STRING,
    })
}