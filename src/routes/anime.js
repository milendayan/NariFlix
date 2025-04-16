const express = require("express");
const router = express.Router();
const animeSchema = require("../models/animeModel");
const verifyToken = require("../routes/validate_token");


// Crear nuevo anime
router.post("/animes", verifyToken, (req, res) => {
    const anime = new animeSchema(req.body);
    anime
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Obtener todos los animes
router.get("/animes", verifyToken, (req, res) => {
    animeSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ message: error.message }));
});

// Obtener un anime por ID
router.get("/animes/:id", (req, res) => {
    const { id } = req.params;
    animeSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.status(404).json({ message: error.message }));
});

// Actualizar anime por ID
router.put("/animes/:id", (req, res) => {
    const { id } = req.params;
    animeSchema
        .updateOne({ _id: id }, { $set: req.body })
        .then((data) => res.json(data))
        .catch((error) => res.status(400).json({ message: error.message }));
});

// Eliminar anime por ID
router.delete("/animes/:id", (req, res) => {
    const { id } = req.params;
    animeSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.status(400).json({ message: error.message }));
});

module.exports = router;