const BossModel = require('../models/BossModel');

//logica para quando for criado um boss
async function CriarUsuario(req,res) {
    const {Name_Boss, Drops, Image, Location, HealthPoints} = req.body;
    if(!Name_Boss || !Drops || !Image || !Location || !HealthPoints){
        return res.status(400).json({msg: 'Erro... Todos os campos são obrigátorios'});
    }
    try {
        const result = await BossModel.insert_boss(Name_Boss, Drops, Image, Location, HealthPoints);
        res.status(201).json({msg:`Sucesso Boss: ${Name_Boss}, foi adicionado com sucesso.`}); 
    } catch (error) {
        res.status(500).json({msg:'Erro ao criar boss', erro: error.message});
    }
}

//listar bosses
async function ListarBoss(req,res) {
    try{
    const bosses = await BossModel.listar_boss();
    res.status(200).json(bosses);
    }catch (error) {
        res.status(500).json({msg:'Erro para listar.', erro: error.message});
    }
}

//busca de bosses

