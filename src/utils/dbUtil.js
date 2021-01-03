import mongoose from 'mongoose';

// Readonly by default. For write, provide credentials via environment
const user = process.env.dbUser || "dbUser";
const password = process.env.dbPass || "Password_123";
const server = 'karmable-cluster.hqxha.mongodb.net';
const database = 'dev';

function dbConnect() {
  mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`)
  return mongoose;
}

export default dbConnect;