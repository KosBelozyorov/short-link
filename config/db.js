const mongoose = require('mongoose');
const config = require('config');

const db = config.get('mongoUri');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('Server error', e.message);
    process.exit(1);
  }
};

module.exports = connectDB;
