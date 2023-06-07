const mongoose = require('mongoose');

const reciclagemSchema = mongoose.Schema({
    usuarioId: {type: mongoose.Types.ObjectId, required: true, ref: "Usuario"},
    item: {type: String, required: true},
    imagem: {type: String, required: true},
    peso: {type: Number, required: true},
    data: {type: Date, required: true},
    pontos: {type: Number, required: true}
});

const Reciclagem = mongoose.model('Reciclagem', reciclagemSchema);

module.exports = Reciclagem;