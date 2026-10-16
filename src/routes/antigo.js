export function antigo(req, res) {
  res.writeHead(301, {
    'Location': '/',
    'Content-Type': 'text/plain; charset=utf-8'
  });

  res.end('Página movida permanentemente. Acesse a página inicial.');
}