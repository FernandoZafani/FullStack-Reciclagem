const mongoose = require('mongoose');
const Premio = require('../model/premio');

const criarPremio = async (descricao, pontos, quantidade) => {
    const premio = new Premio({descricao: descricao, pontos: pontos, quantidade: quantidade});
    return await premio.save();
}

const atualizarPremio = async (premioId, descricao, pontos, quantidade) => {

    let session;
    try {
        session = await mongoose.startSession();
        session.startTransaction();
        const premio = await Premio.findById(premioId).exec();
        if(premio){
            const premio = await Premio.updateOne({_id: premioId}, {$set: {descricao: descricao, pontos: pontos, quantidade: quantidade}});
            await session.commitTransaction();
            return premio;
        }
        
    } catch (error) {
        console.log(error);
        session.abortTransaction();
    } finally {
        if (session) {
            session.endSession();
        }
    }
}

const obterPremio = async (premioId) => {

    let session;
    try {
        session = await mongoose.startSession();
        session.startTransaction();
        const premio = await Premio.findById(premioId).exec();
        return premio;
        
    } catch (error) {
        console.log(error);
        session.abortTransaction();
    } finally {
        if (session) {
            session.endSession();
        }
    }
}

const obterTodosPremios = async () => {

    let session;
    try {
        session = await mongoose.startSession();
        session.startTransaction();
        const premio = await Premio.find().exec();
        return premio;
        
    } catch (error) {
        console.log(error);
        session.abortTransaction();
    } finally {
        if (session) {
            session.endSession();
        }
    }
}

const obterPremiosPontos = async (pontos) => {

    let session;
    try {
        session = await mongoose.startSession();
        session.startTransaction();
        const premio = await Premio.find().exec();
        var premioFiltro = [];
        for (var i = 0; i < premio.length; i++){
            if(premio[i].pontos == pontos){
                premioFiltro.push(premio[i]);
            }
        }
        return premioFiltro;
        
    } catch (error) {
        console.log(error);
        session.abortTransaction();
    } finally {
        if (session) {
            session.endSession();
        }
    }
}

const deletarPremio = async (premioId) => {

    let session;
    try {
        session = await mongoose.startSession();
        session.startTransaction();
        const premio = await Premio.findById(premioId).exec();
        if(premio){
            const premio = await Premio.deleteOne({_id: premioId});
            await session.commitTransaction();
            return premio;
        }
        
    } catch (error) {
        console.log(error);
        session.abortTransaction();
    } finally {
        if (session) {
            session.endSession();
        }
    }
}

module.exports.criarPremio = criarPremio;
module.exports.atualizarPremio = atualizarPremio;
module.exports.obterPremio = obterPremio;
module.exports.obterTodosPremios = obterTodosPremios;
module.exports.obterPremiosPontos = obterPremiosPontos;
module.exports.deletarPremio = deletarPremio;