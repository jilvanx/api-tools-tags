import 'dotenv/config';

import express from 'express';
import cors from 'cors';

import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === 'development') {
        return res.status(500).json(err);
      }

      return res.status(500).json({ error: 'Internal server error' });
    });
  }
}

export default new App().server;
