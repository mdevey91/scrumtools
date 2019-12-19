module.exports = (sequelize, type) => {
    return sequelize.define('session', {
        id: {
            type: type.UUID,
            defaultValue: type.UUIDV1,
            primaryKey: true
        },
        name: type.STRING
    })
}