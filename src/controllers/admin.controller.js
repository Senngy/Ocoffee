import { coffeeDataMapper } from "../datamappers/coffee.datamapper.js";
import { caractDataMapper } from "../datamappers/caract.datamapper.js";


export const adminController = {
    async loginPage(req, res) {
        res.render('loginAdmin', { title: 'Connexion Admin' });
    },
    async adminPage(req, res) {
        const coffees = await coffeeDataMapper.getAll();
        const caract = await caractDataMapper.getAll();
        console.log("Cafés :", coffees);
        console.log("Caractéristiques :", caract);

        res.render('admin', { title: 'Administration', coffees, caract });
    },
}   