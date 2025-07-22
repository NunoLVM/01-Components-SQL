# 🎬 TP : Cineclub - Les requêtes préparées

## Objectif pédagogique

Ce projet a pour but de te faire manipuler une **base de données relationnelle MySQL** depuis un projet **Node.js avec Express**, en appliquant les **bonnes pratiques de sécurité** : utilisation de **requêtes préparées** pour se protéger des **injections SQL**.

---

## 🔧 Mise en place

### 1. Installer les dépendances

```bash
npm install express mysql2
```


### 2. Vérifie le nom de ta base de données

Connecte-toi à ton terminal mysql puis vérifie l'état de ta database
```bash
mysql -u root
SHOW DATABASES;
```

### 3. Configurer la connexion (fichier db.js)

Vérifie que le fichier db.js a bien les bonnes données pour se connecter à ta database. 

## 📁 Structure du projet

```bash 
├── db.js              # Connexion MySQL
├── film.js           # Routes de l'API pour les film
├── server.js          # Point d'entrée de l’application
└── package.json       # Dépendances
```

## 🎯 Exercice

Tu dois compléter le fichier `film.js` en écrivant les requêtes préparées dans chaque endpoint à l’emplacement suivant :

```js
// TODO : ÉCRIRE LA REQUÊTE PRÉPARÉE
```

Les endpoints à implémenter :

1. `GET /film`
Retourne la liste complète des film.

2. `GET /film/:id`
Retourne un film par son ID.

3. `POST /film`
Ajoute un nouveau film. Vérifie que le champ id et titre sont présents.

4. `PATCH /film/:id`
Modifie le titre d’un film par son ID.

5. `DELETE /film/:id`
Supprime un film par son ID

## 💡 Aide : requête préparée avec mysql2
```js
const sql = "SELECT * FROM film WHERE id = ?";
const [rows] = await db.execute(sql, [id]);
```

- Utilise ? pour chaque paramètre dans la requête

- Fournis les valeurs dans un tableau [] à la méthode execute


## Test de l'API

Utilise Thunderclient pour tester les routes :

    GET http://localhost:3000/film

    GET http://localhost:3000/film/1


Bon courage ! 💪

