import { coffeeDataMapper } from '../datamappers/coffee.datamapper.js';

export const mainController = {

    error404: (_, res) => {
      res.status(404).render('error', {statusCode: 404, message: 'Page not found'});
    },
  
    async homePage(_, res) {
        const newCoffees = await coffeeDataMapper.getNewCoffee();
        console.log("3 derniers cafés dispo :", newCoffees);
      res.render('home', { newCoffees });
    },

  }