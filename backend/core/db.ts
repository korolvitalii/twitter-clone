import mongose, { ConnectOptions } from 'mongoose';

mongose.Promise = Promise;

mongose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/twitter', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
} as ConnectOptions);

const db = mongose.connection;

db.on('error', console.error.bind(console, 'connection error: '));

export { db, mongose };
