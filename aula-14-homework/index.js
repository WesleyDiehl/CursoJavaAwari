import mongo from './config/mongodb.mjs';
import express from 'express';
const app = express();
app.use(express.json());
const PORT = 3333;
 
/* GET home page. */
app.get('/', async (req, res) => {
    const db = await mongo();
    const usuarios = await db.collection('usuarios').find().toArray();
    return res.status(200).json(usuarios);
})

/*
json usado na criaçao:
{
  "nome": "teste",
  "idade": "22",
  "status": "ativo"
}
*/
app.post('/', async (req, res) => {
    const db = await mongo();
    const usuarios = db.collection('usuarios')
    await usuarios.insertOne(req.body);
  return res.status(200).json('Rota POST')
})

/*
json usado na criaçao:
{
    "nome": "teste",
    "idade": "28"
}
*/
app.put('/', async (req, res) => {
    const db = await mongo();
    const usuarios = db.collection('usuarios')
    const filter = { nome: req.body.nome };
    const updateDoc = {
        $set: {  
            idade: req.body.idade  
        },  
      }
      await usuarios.updateOne(filter, updateDoc);
  return res.status(200).json('Rota PUT')
})
  
/*
json usado na criaçao:
{
    "nome": "teste"
}
*/
app.delete('/', async (req, res) => {
    const db = await mongo();
    const usuarios = db.collection('usuarios')
    const query = { nome: req.body.nome };
    const result = await usuarios.deleteOne(query);
    return res.status(200).json('Rota DELETE')
})

app.listen(PORT, () => {
    console.log('App rodando em http://localhost:3333');
});