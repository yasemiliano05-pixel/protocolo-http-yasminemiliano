export function sobre(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain; charset=utf-8',
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff'
  });

  res.end(
    'Projeto acadêmico sobre o protocolo HTTP. ' +
    'Esta resposta demonstra diferentes cabeçalhos HTTP.'
  );
}
