
import http from 'node:http';

import { inicio } from './views/inicio.js';
import { antigo } from './routes/antigo.js';
import { busca } from './routes/busca.js';
import { contato } from './views/contato.js';
import { sobre } from './views/sobre.js';

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const caminho = url.pathname;

  if (caminho === '/') {
    return inicio(req, res);
  }

  if (caminho === '/antigo') {
    return antigo(req, res);
  }

  if (caminho === '/busca') {
    return busca(req, res, url);
  }

  if (caminho === '/contato') {
    return contato(req, res);
  }

  if (caminho === '/sobre') {
    return sobre(req, res);
  }

  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('404 - Página não encontrada');
});

server.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
