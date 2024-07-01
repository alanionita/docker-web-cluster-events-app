import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import createError from 'http-errors';
dotenv.config();

import eventRouter from './routes/event';
import ticketRouter from './routes/ticket';

const app = express();

app.use(cors({
  credentials: true,
  origin: (origin, callback) => {
    callback(null, true);
  },
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/ticket', ticketRouter);
app.use('/event', eventRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

export default app;