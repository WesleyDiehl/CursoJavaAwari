import {Router} from 'express';

const routes = Router();

routes.get('/primeira-rota', (req, res) => {
    return res.send('Deu Certo!');
});

export default routes;
