import { coffeeDataMapper } from '../datamappers/coffee.datamapper.js';

export const catalogueController = {
    async catalogue (_, res) {
        const coffees = await coffeeDataMapper.getAll();
        // console.log("Cafés :", coffees);
    
        res.render('catalog', { title: 'Catalogue', coffees });
    },  
};