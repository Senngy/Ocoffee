import express from 'express';
import { mainRouter } from './src/routes/main.route.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3500;

app.set('view engine', 'ejs');
app.set('views', './src/views');

// Middleware pour parser le corps des requêtes : body-parser
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use(mainRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});