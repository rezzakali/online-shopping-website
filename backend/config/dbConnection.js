// external imports
import mongoose from 'mongoose';

const connectionToDb = () => {
  mongoose
    .connect(`${process.env.DB_CONNECTION_URL}/${process.env.DB_NAME}`)
    .then(() => {
      console.log('Database connected successfully!');
    })
    .catch(() => {
      console.log('Database connection failed!');
    });
};

export default connectionToDb;
