import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import session from 'express-session';
import { mainRouter } from './src/routes/main.route.js';




const app = express();
const PORT = process.env.PORT || 3500;
const SESSION_SECRET = process.env.SESSION_SECRET;

app.set('view engine', 'ejs');
app.set('views', './src/views');

// Middleware pour parser le corps des requêtes : body-parser
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use(session({
  secret: SESSION_SECRET, // Clé secrète pour signer le cookie de session
  resave: false, // Ne pas sauvegarder la session si elle n'a pas été modifiée
  saveUninitialized: false, // Ne pas sauvegarder une session non initialisée
  cookie: { // Options du cookie de session
    httpOnly: true, // Empêche l'accès au cookie via JavaScript
    secure: process.env.NODE_ENV === 'production', // Utiliser secure si en production
    maxAge: 3600000 // Durée de vie du cookie en millisecondes (1 heure ici)
  }
}));

app.use(mainRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});