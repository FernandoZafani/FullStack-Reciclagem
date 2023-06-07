const express = require('express');
const mongoose = require('mongoose');
const premioRoute = require ('./routes/premio-route');
const usuarioRoute = require('./routes/usuario-route');
const reciclagemRoute = require('./routes/reciclagem-route');

const url = "mongodb+srv://teste:teste@cluster0.wnbdk2i.mongodb.net/?retryWrites=true&w=majority";


const app = express();

// habilita a rota para usuarios
app.use(premioRoute);
app.use(usuarioRoute);
app.use(reciclagemRoute);

app.post('/alo', (req, res) => {
    res.send('Ola');
})

app.use((req, res) => {
    res.status(404).json({msg: "Endpoint inexistente!"})
})

mongoose.connect(url).then(() => {
    app.listen(3000, () => console.log('Servidor iniciado...'));
}).catch((err) => console.log(err));