import { client } from '../db/client.js';

export const coffeeDataMapper = {
    async getAll() {
        const { rows: coffee } = await client.query('SELECT * FROM coffee JOIN country ON coffee.country_id = country.id');
        console.log("cafés :",coffee);
        return coffee;
    },
    async getNewCoffee() {
        const { rows: coffee } = await client.query('SELECT * FROM coffee WHERE available = TRUE ORDER BY id DESC LIMIT 3');
       // console.log("3 derniers cafés dispo :",coffee);
        return coffee;
    }
};  