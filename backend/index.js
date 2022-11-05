// external imports
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

// internal imports
import connectionToDb from './config/dbConnection.js';
import paymentRoutes from './routes/paymentRoutes.js';

// database and environment configuration
dotenv.config();
connectionToDb();

// app object
const app = express();

// body parser configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

// route handlers
app.use('/api', paymentRoutes);

// error handler

app.use((err, req, res, next) => {
  if (err.headersSent) return next();
  else
    return res.status(500).json({
      message: err.message || 'There was a server side error!',
      error: err,
    });
});

// listening the server

app.listen(process.env.PORT || 8000, process.env.HOST_NAME, () => {
  console.log(
    `Your server is running successfully at http://${process.env.HOST_NAME}:${process.env.PORT}`
  );
});
