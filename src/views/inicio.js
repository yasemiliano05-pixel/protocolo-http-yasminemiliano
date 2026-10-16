export function inicio(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });

  res.end(`
    <!DOCTYPE html>
    <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <title>Protocolo HTTP</title>
      </head>
      <body>
        <h1>Meu servidor HTTP está funcionando!</h1>
        <p>Esta é a página inicial do projeto.</p>
      </body>
    </html>
  `);
}