const db = require("../config/mysql");

async function getData(query) {
    return await db.query(query);
}

async function createData(json) {
    return await db.query(`INSERT INTO aulas (aula, instrutor, dificuldade) 
    VALUES('${json.aula}', '${json.instrutor}', '${json.dificuldade}');`);
}

async function updateData(body) {
    const nomeAula = body.nomeAula;
    const aula = body.aula;
    const instrutor = body.instrutor;
    const dificuldade = body.dificuldade;
    await db.query('UPDATE aulas SET aula=?, instrutor=?, dificuldade=? WHERE aula=?', [aula, instrutor,dificuldade, nomeAula]);
}

async function deleteData(nomeAula) {
    return await db.query(`DELETE FROM aulas where aula = '${nomeAula}';`);
}
module.exports = {
  getData,
  createData,
  updateData,
  deleteData
};