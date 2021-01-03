const mongoose = require('mongoose');

class MongoUtil {

  constructor() {
    // Readonly by default. For write, provide credentials via environment
    const _user = process.env.dbUser || "dbUser";
    const _password = process.env.dbPass || "Password_123";
    const _server = 'karmable-cluster.hqxha.mongodb.net';
    const _database = 'dev';
    const _db = this._connect();
  }

  _connect() {
    mongoose.connect(`mongodb+srv://${this._user}:${this._password}@${this._server}/${this._database}`).then(() => {
      console.log(`Connected to database ${new Date().toString}`);
      return mongoose;
    }).catch(err => {
      console.error(`Unable to connect to database at ${new Date().toString()} Error: ${err}`);
      return undefined;
    })
  }

  close() {
    mongoose.disconnect();
  }

  getConnection() {
    return this._db;
  }
}




module.exports.mongoDB = new MongoUtil();