export function contato(req, res) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    res.writeHead(405, {
      'Content-Type': 'text/plain; charset=utf-8',
      'Allow': 'GET, POST'
    });

    return res.end('405 - Método não permitido nesta rota.');
  }

  if (req.method === 'POST') {
    res.writeHead(201, {
      'Content-Type': 'text/plain; charset=utf-8'
    });

    return res.end('201 - Solicitação de contato recebida.');
  }

  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });

  res.end(`
    <h1>Contato</h1>
    <p>Esta página aceita requisições GET e POST.</p>
  `);
}
