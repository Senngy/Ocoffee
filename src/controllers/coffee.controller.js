import { coffeeDataMapper } from "../datamappers/coffee.datamapper.js";
import { caractDataMapper } from "../datamappers/caract.datamapper.js";

export const coffeeController = {
    async coffeeDetails(req, res) {
        const { id } = req.params;
        const coffee = await coffeeDataMapper.getCoffeeById(id);
        console.log("Café :", coffee);
        if (!coffee) {
            return res.status(404).render('error', { statusCode: 404, message: 'Café non trouvé' });
        }
        const caracteristics = await caractDataMapper.getTypesById(id);
        console.log("caracteristics :", caracteristics);    
        res.render('coffee', { title: 'Détails du café', coffee, caracteristics });
    }
}