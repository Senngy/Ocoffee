import { client } from '../db/client.js';

export const coffeeDataMapper = {
    async getAll() {
        const { rows: coffee } = await client.query('SELECT * FROM coffee JOIN country ON coffee.country_id = country.id');
      //  console.log("cafés :",coffee);
        return coffee;
    },
    async getNewCoffee() {
        const { rows: coffee } = await client.query('SELECT * FROM coffee WHERE available = TRUE ORDER BY id DESC LIMIT 3');
       // console.log("3 derniers cafés dispo :",coffee);
        return coffee;
    }, 
    async getCoffeeById(id) {
        const { rows: coffee } = await client.query('SELECT * FROM coffee JOIN country ON coffee.country_id = country.id WHERE coffee.id = $1', [id]);
       // console.log("Café :",coffee);
        return coffee[0];
    }
};  