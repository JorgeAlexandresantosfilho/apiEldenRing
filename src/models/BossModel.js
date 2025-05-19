const bd = require('../config/bd');

//inserindo boss
async function insert_boss(Name_Boss, Drops, Image, Location, HealthPoints) {
    const [result] = await bd.execute(
        'CALL insert_Boss(?,?,?,?,?)',
        [Name_Boss, Drops, Image, Location, HealthPoints]
    );
    return result;
}
//listando bosses
async function listar_boss() {
    const [rows] = await bd.execute('SELECT * FROM Bosses');
    return rows;
}
//listar boss por id
async function listar_boss_id(id) {
    const [rows] = await bd.query('SELECT * FROM Bosses WHERE Id_Boss = ?', [id]);
    return rows[0];
}
//atualizando boss
async function update_boss(id, Name_Boss, Drops, Image, Location, HealthPoints) {
    const [result] = bd.execute(
        'CALL update_Boss(?,?,?,?,?,?)',
        [id, Name_Boss, Drops, Image, Location, HealthPoints]
    );
    return result;
}
//deletando usuario
async function delete_boss(id) {
    const [result] = bd.execute('CALL delete_Boss(?)', [id]);
    return result;
}

module.exports = {
    insert_boss,
    listar_boss,    
    listar_boss_id,
    update_boss,
    delete_boss
}