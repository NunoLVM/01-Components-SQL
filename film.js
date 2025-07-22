const express = require('express');
const router = express.Router();
const db = require('./db');

// 1. GET / : liste complète
router.get('/', async (req, res) => {
  const [rows] = await db.execute('SELECT * FROM film');
  res.json(rows);
});


// 2. GET /:id : film par ID
router.get("/:id", async (req, res) => {
  const [rows] = await db.execute("SELECT * FROM film WHERE id = ?", [req.params.id]);
  if (rows.length === 0) return res.status(404).send("Film non trouvé");
  res.json(rows[0]);
});


// 3. POST / : ajout d’un film
router.post("/", async (req, res) => {
  const { titre, Realisateur_id } = req.body;
  if (!titre || !Realisateur_id) return res.status(400).send("titre et Realisateur_id requis");

  try {
    await db.execute("INSERT INTO film (titre, Realisateur_id) VALUES (?, ?)", [titre, Realisateur_id]);
    res.status(201).send("Film ajouté");
  } catch (err) {
    res.status(500).send("Erreur : " + err.message);
  }
});


// 4. PATCH /:id : modification du titre
router.patch("/:id", async (req, res) => {
  const { titre } = req.body;
  if (!titre) return res.status(400).send("Nouveau titre requis");

  try {
    const [result] = await db.execute("UPDATE film SET titre = ? WHERE id = ?", [titre, req.params.id]);
    if (result.affectedRows === 0) return res.status(404).send("Film non trouvé");
    res.send("Titre mis à jour");
  } catch (err) {
    res.status(500).send("Erreur : " + err.message);
  }
});


// 5. DELETE /:id : suppression
router.delete("/:id", async (req, res) => {
  try {
    const [result] = await db.execute("DELETE FROM film WHERE id = ?", [req.params.id]);
    if (result.affectedRows === 0) return res.status(404).send("Film non trouvé");
    res.send("Film supprimé");
  } catch (err) {
    res.status(500).send("Erreur : " + err.message);
  }
});


module.exports = router;
