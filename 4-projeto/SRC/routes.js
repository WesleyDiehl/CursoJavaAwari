import {Router} from 'express';

const routes = Router();

routes.get('/', (req, res) => {
    return res.send('Deu Certo!');
});

export default routes;
