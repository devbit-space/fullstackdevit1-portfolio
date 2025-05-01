import mongoose from 'mongoose';

const connectDb = async (): Promise<void> => {
  if (mongoose.connection.readyState >= 1) return;

  const mongoUri = process.env.MONGODB_URI;
  if (!mongoUri) {
    throw new Error('MONGODB_URI is not defined');
  }
  await mongoose.connect(mongoUri);
};

export default connectDb;

