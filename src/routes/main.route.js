import { Router } from 'express';
import { mainController } from '../controllers/main.controller.js';
import { catalogueController } from '../controllers/catalogue.controller.js';
import { coffeeController } from '../controllers/coffee.controller.js';
import { shopController } from '../controllers/shop.controller.js';


export const mainRouter = Router();

mainRouter.get('/', mainController.homePage);

mainRouter.get('/catalogue', catalogueController.catalogue);

mainRouter.get('/catalogue/:id', coffeeController.coffeeDetails);

mainRouter.get('/boutique', shopController.shopPage);

