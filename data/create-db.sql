-- Nettoyage préalable
DROP TABLE IF EXISTS "country", "coffee", "caracteristic", "coffee_caracteristic";

-- Table des pays
CREATE TABLE "country" (
    "id" SERIAL PRIMARY KEY,
    "country_name" VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE "coffee" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "reference" VARCHAR(25) UNIQUE NOT NULL,
    "country_id" INT REFERENCES country(id) ON DELETE SET NULL,
    "price_kg" DECIMAL(6,2),
    "available" BOOLEAN
);

CREATE TABLE "caracteristic" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR(50) NOT NULL
);


CREATE TABLE "coffee_caracteristic" (
    coffee_id INT REFERENCES "coffee"("id") ON DELETE CASCADE,
    caracteristic_id INT REFERENCES "caracteristic"("id") ON DELETE CASCADE,
    PRIMARY KEY (coffee_id, caracteristic_id)
);

-- Insertion des pays
INSERT INTO country ("country_name") VALUES
('Italie'),
('Colombie'),
('Éthiopie'),
('Brésil'),
('Guatemala'),
('Kenya'),
('Indonésie'),
('Costa Rica'),
('Vietnam'),
('Tanzanie'),
('Jamaïque'),
('Rwanda'),
('Panama'),
('Pérou'),
('Hawaï'),
('Nicaragua');

INSERT INTO caracteristic ("type") VALUES
('Corsé'),
('Épicé'),
('Acide'),
('Doux'),
('Fruité'),
('Chocolaté');

-- Insertion des cafés (avec les ID de pays correspondants)
INSERT INTO coffee ("name", "description", "reference", "country_id", "price_kg", "available") VALUES
('Espresso', 'Café fort et concentré préparé en faisant passer de l''eau chaude à travers du café finement moulu.', '100955890', 1, 20.99, TRUE),
('Columbian', 'Café moyennement corsé avec une acidité vive et une saveur riche.', '100955894', 2, 18.75, TRUE),
('Ethiopian Yirgacheffe', 'Réputé pour son arôme floral, son acidité vive et ses notes de saveur citronnée.', '105589090', 3, 22.50, TRUE),
('Brazilian Santos', 'Café doux et lisse avec un profil de saveur de noisette.', '134009550', 4, 17.80, TRUE),
('Guatemalan Antigua', 'Café corsé avec des nuances chocolatées et une pointe d''épice.', '256505890', 5, 21.25, TRUE),
('Kenyan AA', 'Café complexe connu pour son acidité rappelant le vin et ses saveurs fruitées.', '295432730', 6, 23.70, TRUE),
('Sumatra Mandheling', 'Café profond et terreux avec un corps lourd et une faible acidité.', '302932754', 7, 19.95, TRUE),
('Costa Rican Tarrazu', 'Café vif et net avec une finition propre et une acidité vive.', '327302954', 8, 24.50, TRUE),
('Vietnamese Robusta', 'Café audacieux et fort avec une saveur robuste distinctive.', '549549090', 9, 16.75, TRUE),
('Tanzanian Peaberry', 'Acidité vive avec un profil de saveur rappelant le vin et un corps moyen.', '582954954', 10, 26.80, TRUE),
('Jamaican Blue Mountain', 'Reconnu pour sa saveur douce, son acidité vive et son absence d''amertume.', '589100954', 11, 39.25, TRUE),
('Rwandan Bourbon', 'Café avec des notes florales prononcées, une acidité vive et un corps moyen.', '650753915', 12, 21.90, TRUE),
('Panamanian Geisha', 'Café rare aux arômes floraux complexes, une acidité brillante et un profil de saveur distinctif.', '795501340', 13, 42.00, TRUE),
('Peruvian Arabica', 'Café équilibré avec des notes de chocolat, une acidité modérée et un corps velouté.', '954589100', 14, 19.40, FALSE),
('Hawaiian Kona', 'Café rare au goût riche, une acidité douce et des nuances subtiles.', '958090105', 15, 55.75, FALSE),
('Nicaraguan Maragogipe', 'Café avec des notes de fruits, une acidité vive et un corps plein.', '691550753', 16, 28.60, FALSE);

-- Espresso: Corsé, Épicé
INSERT INTO coffee_caracteristic (coffee_id, caracteristic_id) VALUES (1, 1), (1, 2);

-- Columbian: Acide
INSERT INTO coffee_caracteristic (coffee_id, caracteristic_id) VALUES (2, 3);

-- Ethiopian Yirgacheffe: Doux, Fruité
INSERT INTO coffee_caracteristic (coffee_id, caracteristic_id) VALUES (3, 4), (3, 5);

-- Brazilian Santos: Doux
INSERT INTO coffee_caracteristic (coffee_id, caracteristic_id) VALUES (4, 4);

-- Guatemalan Antigua: Corsé
INSERT INTO coffee_caracteristic (coffee_id, caracteristic_id) VALUES (5, 1);

-- Kenyan AA: Doux, Acide
INSERT INTO coffee_caracteristic (coffee_id, caracteristic_id) VALUES (6, 4), (6, 3);

-- Sumatra Mandheling: Corsé
INSERT INTO coffee_caracteristic (coffee_id, caracteristic_id) VALUES (7, 1);

-- Costa Rican Tarrazu: Acide
INSERT INTO coffee_caracteristic (coffee_id, caracteristic_id) VALUES (8, 3);

-- Vietnamese Robusta: Épicé
INSERT INTO coffee_caracteristic (coffee_id, caracteristic_id) VALUES (9, 2);

-- Tanzanian Peaberry: Fruité, Corsé
INSERT INTO coffee_caracteristic (coffee_id, caracteristic_id) VALUES (10, 5), (10, 1);

-- Jamaican Blue Mountain: Doux
INSERT INTO coffee_caracteristic (coffee_id, caracteristic_id) VALUES (11, 4);

-- Rwandan Bourbon: Fruité
INSERT INTO coffee_caracteristic (coffee_id, caracteristic_id) VALUES (12, 5);

-- Panamanian Geisha: Fruité
INSERT INTO coffee_caracteristic (coffee_id, caracteristic_id) VALUES (13, 5);

-- Peruvian Arabica: Corsé, Chocolaté
INSERT INTO coffee_caracteristic (coffee_id, caracteristic_id) VALUES (14, 1), (14, 6);

-- Hawaiian Kona: Doux
INSERT INTO coffee_caracteristic (coffee_id, caracteristic_id) VALUES (15, 4);