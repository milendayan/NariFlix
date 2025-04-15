const mongoose = require("mongoose"); // importando el componente mogoose
const animeSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    genero: {
        type: String,
        required: true,
    },
    tipo: {
        type: String,
        enum: ["Serie", "Película"],
        required: true,
    },
    episodios: {
        type: Number,
        required: false,
    },
    añoEstreno: {
        type: Number,
        required: true,
    },
    estudio: {
        type: String,
        required: false,
    },
    puntuacion: {
        type: Number,
        min: 0,
        max: 10,
        required: false,
    },
    estado: {
        type: String,
        enum: ["En emisión", "Finalizado", "Próximamente"],
        required: true,
    },
    fechaRegistro: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model("Anime", animeSchema);
