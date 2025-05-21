# Conception de la base de donnée

## Modèle de données MCD/MLD/MPD

## Une relation many-to-many pour les caractéristiques café ?

Bien que le projet actuel ne contienne qu'une quinzaine de cafés avec un nombre limité de caractéristiques, on a fait le choix de normaliser les données avec trois tables distinctes (`cafes`, `caracteristiques`, `cafe_caracteristique`; les clés seront toutes en anglais) afin de :

- Faciliter les futures évolutions (ajout, modification de données sans duplication)
- Permettre des recherches avancées (filtrer les cafés par combinaison de caractéristiques)
- Respecter les bonnes pratiques de modélisation relationnelle
- Améliorer la qualité et la maintenabilité du code

Ce choix permet également une meilleure optique si le projet venait à s'étendre (ex : ajout d’un espace admin, multi-langue, historique, etc...)


### MCD
[Café]
- id
- nom
- description
- référence
- origine
- prix_kilo
- disponible

[Caractéristique]
- id
- nom

Relation:
Un Café peut avoir plusieurs Caractéristiques
Une Caractéristique peut s’appliquer à plusieurs Cafés

==> Relation N:N : "Possède"

### MLD
Table Cafe (
  id PRIMARY KEY,
  nom,
  description,
  reference UNIQUE,
  origine,
  prix_kilo,
  disponible
)

Table Caracteristique (
  id PRIMARY KEY,
  nom UNIQUE
)

Table CafeCaracteristique (
  cafe_id FOREIGN KEY REFERENCES Cafe(id),
  caracteristique_id FOREIGN KEY REFERENCES Caracteristique(id),
  PRIMARY KEY (cafe_id, caracteristique_id)
)
### MPD

Voir le script dans create-db.sql