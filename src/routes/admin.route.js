import { Router } from 'express';
import { adminController } from '../controllers/admin.controller.js';
import { isLogged } from '../middlewares/auth.middleware.js';

export const adminRouter = Router();

adminRouter.get('/admin/login', adminController.loginPage);
adminRouter.post('/admin/login', adminController.login);

adminRouter.use(isLogged); // Apply the isLogged middleware to all admin routes

adminRouter.get('/admin', adminController.adminPage);
adminRouter.get('/admin/coffees', adminController.adminCoffee);

