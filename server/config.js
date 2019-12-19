module.exports = {
    database: '0NAvoPALfK',
    username: '0NAvoPALfK',
    password: 'CHoplpfChL',
    host: 'remotemysql.com',
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    nodePort: process.env.PORT || 8081,
    mysqlPort: 3306,
    TOKEN_SECRET: 'mysupersecrettoken',
}