import express from 'express';
import { serverConfig } from './serverConfig';

const app = express();


app.use(express.json());

app.use('/clients');

app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});


app.listen(serverConfig.port, serverConfig.ip, () => {
  console.log(`Servidor rodando em http://${serverConfig.ip}:${serverConfig.port}`);
});