const Sequelize = require('sequelize');
const UserModel = require('./models/user');
const SessionModel = require('./models/session');
const NoteModel = require('./models/note');
const { database, username, password, host, dialect, pool, mysqlPort: port } = require('./config');

const sequelize = new Sequelize(database, username, password, { host, dialect, pool, port });

const Note = NoteModel(sequelize, Sequelize);
const Session = SessionModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);

User.hasMany(Note);
User.hasMany(Session);
Session.hasMany(Note);

sequelize.sync({ force: true }) //for testing only, will dump database on new connection
  .then(() => {
    console.log(`Database & tables created!`)
  });

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = {
  User,
  Session,
  Note,
};