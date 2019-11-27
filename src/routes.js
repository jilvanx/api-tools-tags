import { Router } from 'express';

import UserController from './app/controllers/UserController';
import AuthController from './app/controllers/AuthController';
import ToolController from './app/controllers/ToolController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

/**
 * /users
 */
routes.post('/users', UserController.store);

/**
 * /auth
 */
routes.post('/auth', AuthController.store);

routes.use(authMiddleware);

routes.get('/tools', ToolController.index);
routes.post('/tools', ToolController.store);
routes.delete('/tools/:id', ToolController.delete);

/**
 * block others routes
 */
routes.use((req, res) => {
  res.status(400).json({ error: 'Bad Request' });
});

export default routes;
