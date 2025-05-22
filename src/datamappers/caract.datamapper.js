import { client } from '../db/client.js';
export const caractDataMapper = {
    async getTypesById(id) {
        const { rows: caracteristics } = await client.query('SELECT * FROM caracteristic JOIN coffee_caracteristic ON caracteristic.id = coffee_caracteristic.caracteristic_id  WHERE coffee_caracteristic.coffee_id  = $1', [id]);
        return caracteristics;
    }
};