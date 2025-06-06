import { Router } from 'express';
import { mainController } from '../controllers/main.controller.js';
import { catalogueController } from '../controllers/catalogue.controller.js';
import { coffeeController } from '../controllers/coffee.controller.js';
import { shopController } from '../controllers/shop.controller.js';
import { adminController } from '../controllers/admin.controller.js';

export const mainRouter = Router();

mainRouter.get('/', mainController.homePage);

mainRouter.get('/catalogue', catalogueController.catalogue);

mainRouter.get('/catalogue/:id', coffeeController.coffeeDetails);

mainRouter.get('/boutique', shopController.shopPage);

mainRouter.get('/admin/login', adminController.loginPage);

mainRouter.get('/admin', adminController.adminPage);