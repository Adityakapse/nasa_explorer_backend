import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import router from './routes/index.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();

app.use(cors());
app.use(express.json());

// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 100,                  // max 100 requests per window
// });
// app.use(limiter);

app.use('/api', router);

app.use(errorHandler);

export default app;