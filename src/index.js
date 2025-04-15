require("dotenv").config();

const express = require('express');
const app = express();
const port = 3000;
const animeRoutes = require("./routes/anime"); 
const mongoose = require("mongoose");

app.use(express.json());
app.use("/api", animeRoutes);

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Conexión exitosa a MongoDB"))
    .catch((error) => console.error("Error de conexión:", error));

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
