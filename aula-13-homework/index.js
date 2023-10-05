const express = require("express");
const service = require("./service/service")
const app = express();
const PORT = 3333;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get('/', async (req, res) => {
    let teste = await service.getData('select * from aulas');
    return res.status(200).json(teste)
})

/* criar
json utilizado no requet:
{
    "aula": "teste1",
    "instrutor": "teste1",
    "dificuldade": "1"
}
*/
app.post('/', async (req, res) => {
    await service.createData(req.body)
    return res.status(200).json('Rota POST')
})

/* atualizar
json utilizado no requet:
{
    "nomeAula": "teste1",
    "aula": "teste3",
    "instrutor": "teste3",
    "dificuldade": "3"
}
*/
app.put('/', async (req, res) => {
    await service.updateData(req.body)
    return res.status(200).json("Rota PUT")
})

/*json utilizado no requet:
{
    "nomeAula": "teste3"
}
*/
app.delete('/', async (req, res) => {
    await service.deleteData(req.body.nomeAula)
    return res.status(200).json('Rota DELETE')
})

app.listen(PORT, () => {
    console.log('App rodando em http://localhost:3333');
});