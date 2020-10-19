/* eslint-disable no-console */
/* eslint-disable import/extensions */
import express from 'express';
// import path  from  'path';
import morgan from 'morgan';
import cors from 'cors';
import indexRouter from './routes/index.js';
import apiUrlRoutes from './routes/url.js';
import connectDB from './db/connect.js';

const PORT = process.env.PORT || '4000';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000'],
    optionsSuccessStatus: 200,
  }),
);

app.use('/', indexRouter);
app.use('/api/url', apiUrlRoutes);

async function start() {
  try {
    app.listen(PORT, () => {
      console.log(`Listening port ${PORT}!`);
    });
    connectDB();
  } catch (error) {
    console.log(error);
  }
}
start();
