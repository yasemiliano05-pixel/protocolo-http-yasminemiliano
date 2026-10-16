export function busca(req, res, url) {
  const termo = url.searchParams.get('termo');

  if (!termo || !termo.trim()) {
    res.writeHead(400, {
      'Content-Type': 'application/json; charset=utf-8'
    });

    return res.end(JSON.stringify({
      erro: 'O parâmetro termo é obrigatório.'
    }));
  }

  res.writeHead(200, {
    'Content-Type': 'application/json; charset=utf-8'
  });

  res.end(JSON.stringify({
    mensagem: 'Busca realizada com sucesso.',
    termo: termo
  }));
}