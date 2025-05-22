import { Router } from 'express';
import { mainController } from '../controllers/main.controller.js';
import { catalogueController } from '../controllers/catalogue.controller.js';

export const mainRouter = Router();

mainRouter.get('/', mainController.homePage);

mainRouter.get('/catalogue', catalogueController.catalogue);