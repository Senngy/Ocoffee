import { coffeeDataMapper } from "../datamappers/coffee.datamapper.js";
import { caractDataMapper } from "../datamappers/caract.datamapper.js";
import dotenv from 'dotenv';
dotenv.config();


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
    login(req, res) {
        const { username, password } = req.body; // Récupération des identifiants depuis le corps de la requête

        // Vérification des identifiants (à adapter selon votre logique)
        if (username === process.env.ADMIN_USER && password === process.env.ADMIN_PASSWORD) {
            req.session.user = { username }; // Stocke l'utilisateur dans la session
            return res.redirect('/admin'); // Redirige vers la page d'administration
        } else {
            return res.status(401).render('loginAdmin', { title: 'Connexion Admin', error: 'Identifiants incorrects' });
        }
    },
    logout(req, res) {
        req.session.destroy(err => {
            if (err) {
                console.error('Erreur lors de la destruction de la session:', err);
                return res.status(500).send('Erreur serveur');
            }
            res.redirect('loginAdmin'); // Redirige vers la page de connexion après la déconnexion
        });
    },
    async adminCoffee(req, res) {
        const coffees = await coffeeDataMapper.getAll();
        res.render('adminCoffee', { title: 'Administration des Cafés', coffees });
    }
}   