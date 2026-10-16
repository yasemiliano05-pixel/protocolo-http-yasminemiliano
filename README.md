# Protocolo HTTP — Yasmin Emiliano

## 1. Introdução

Neste trabalho, o objetivo é entender melhor como funciona o protocolo HTTP e como acontece a comunicação entre um navegador e um servidor. Para isso, desenvolvi um servidor utilizando Node.js, sem frameworks, para conseguir observar na prática como funcionam as requisições, as respostas e os códigos de status.

Durante o desenvolvimento, também pude aprender sobre os métodos HTTP, os cabeçalhos e a importância de cada informação enviada pelo servidor.

## 2. Como funciona a comunicação HTTP

Quando acessamos um site, existe uma comunicação entre o navegador, que funciona como cliente, e o servidor, que recebe as solicitações e envia as respostas.

Antes de acessar um site pelo nome de domínio, o DNS ajuda a encontrar o endereço IP correspondente. Depois, o cliente estabelece a conexão necessária e envia uma requisição HTTP, informando qual recurso deseja acessar.

O servidor recebe essa requisição, verifica o que foi solicitado e envia uma resposta. Essa resposta pode conter uma página HTML, um texto, um arquivo ou uma mensagem informando se ocorreu algum erro.

No meu projeto, utilizei o endereço `http://localhost:3000` para acessar o servidor localmente durante os testes.

## 3. Estrutura das requisições e respostas

### Requisição HTTP

A requisição é a mensagem que o cliente envia ao servidor. Ela pode conter uma linha inicial, cabeçalhos e um corpo, dependendo do tipo de solicitação.

Exemplo:

`GET /sobre HTTP/1.1`

`Host: localhost:3000`

Nesse exemplo, o método GET solicita o acesso à rota `/sobre`. O cabeçalho Host informa o endereço do servidor que está sendo acessado.

O corpo da requisição pode ser utilizado para enviar informações, como os dados de um formulário.

### Resposta HTTP

Depois de receber a requisição, o servidor envia uma resposta com um código de status, cabeçalhos e, quando necessário, um corpo.

Durante os testes do projeto, ao acessar a rota `/busca` sem informar o parâmetro obrigatório, recebi a seguinte resposta:

`HTTP/1.1 400 Bad Request`

`Content-Type: application/json; charset=utf-8`

O servidor também enviou a mensagem:

`{"erro":"O parâmetro termo é obrigatório."}`

Isso acontece porque a rota espera receber um termo para realizar a busca. Como ele não foi informado, o servidor retorna o status 400 para indicar o problema.

## 4. Métodos HTTP

Os métodos HTTP indicam o tipo de ação que o cliente deseja realizar.

- **GET:** utilizado para consultar informações, como quando abrimos uma página no navegador.
- **POST:** utilizado para enviar informações ao servidor, como dados de um formulário.
- **PUT:** utilizado para criar ou substituir a representação de um recurso.
- **PATCH:** utilizado para realizar alterações parciais em um recurso.
- **DELETE:** utilizado para solicitar a exclusão de um recurso.

Também existem duas características importantes: segurança e idempotência.

Um método seguro é aquele cuja finalidade é consultar informações, sem solicitar alterações no estado do servidor. Já um método idempotente é aquele em que repetir a mesma requisição produz o mesmo efeito pretendido no servidor.

O GET é seguro e idempotente. O PUT e o DELETE são idempotentes, mas não são seguros. O POST não é idempotente por padrão, e o PATCH também não é considerado idempotente por padrão, embora isso dependa da implementação.

No meu projeto, utilizei GET para acessar as páginas e POST para demonstrar uma solicitação de contato. Também testei um método não permitido na rota `/contato`, que retorna o status 405.

## 5. Códigos de status HTTP

Os códigos de status são utilizados para informar o resultado de uma requisição. Eles são divididos em cinco grupos:

- **1xx:** respostas informativas.
- **2xx:** indicam que a requisição foi processada com sucesso.
- **3xx:** indicam redirecionamentos ou outras ações relacionadas ao acesso ao recurso.
- **4xx:** indicam problemas na requisição ou restrições de acesso.
- **5xx:** indicam falhas no servidor.

Alguns códigos importantes são:

- **200 OK:** a requisição foi realizada com sucesso.
- **201 Created:** indica que a requisição foi atendida e um ou mais recursos foram criados.
- **301 Moved Permanently:** indica que o recurso foi movido permanentemente para outro endereço.
- **302 Found:** indica um redirecionamento temporário.
- **304 Not Modified:** indica que o recurso não foi modificado em relação à condição de validação enviada pelo cliente, permitindo o uso de uma versão armazenada em cache.
- **400 Bad Request:** indica que a requisição apresenta algum problema.
- **401 Unauthorized:** indica que é necessário fornecer credenciais de autenticação válidas.
- **403 Forbidden:** indica que o servidor entendeu a requisição, mas não permite o acesso.
- **404 Not Found:** indica que o recurso solicitado não foi encontrado.
- **405 Method Not Allowed:** indica que o método utilizado não é permitido para aquela rota.
- **500 Internal Server Error:** indica que ocorreu uma falha inesperada no servidor.

É importante entender a diferença entre os códigos 401 e 403. O 401 está relacionado à autenticação, enquanto o 403 indica que o acesso foi recusado.

Outra diferença é entre 301 e 302. O 301 representa um redirecionamento permanente, enquanto o 302 representa um redirecionamento temporário.

No meu projeto, implementei o redirecionamento 301 na rota `/antigo`, que direciona o usuário para a página inicial.

## 6. Cabeçalhos HTTP

Os cabeçalhos são informações que acompanham as requisições e respostas e ajudam o cliente e o servidor a entender como os dados devem ser interpretados.

Os principais cabeçalhos estudados foram:

- **Content-Type:** informa o tipo de conteúdo enviado, como HTML, texto simples ou JSON.
- **Content-Length:** informa o tamanho do corpo da mensagem em bytes, quando utilizado.
- **Location:** indica o endereço de destino em uma resposta de redirecionamento.
- **Allow:** informa quais métodos HTTP são permitidos para determinada rota.
- **Cache-Control:** define orientações sobre o armazenamento e a reutilização de respostas em cache.
- **User-Agent:** apresenta informações sobre o cliente que realizou a requisição.
- **Accept:** informa quais tipos de conteúdo o cliente aceita receber.

Esses cabeçalhos aparecem nos testes realizados pelo terminal e ajudam a entender melhor as informações trocadas entre cliente e servidor.

## 7. O que significa stateless?

O HTTP é considerado um protocolo sem estado, também chamado de *stateless*. Isso significa que ele não mantém automaticamente o histórico das requisições anteriores.

Por exemplo, quando acessamos diferentes páginas de um site, o protocolo não reconhece sozinho que as requisições pertencem ao mesmo usuário. Para manter informações entre acessos, uma aplicação pode utilizar cookies, sessões ou tokens.

No meu projeto, as rotas respondem às requisições de forma independente, sem utilizar um sistema de login ou de sessões.

## 8. Diferença entre HTTP e HTTPS

O HTTP é utilizado para a comunicação entre clientes e servidores. Já o HTTPS utiliza o HTTP com uma camada de segurança chamada TLS.

Essa camada ajuda a proteger a comunicação por meio de criptografia, além de fornecer mecanismos de integridade e autenticação do servidor.

No projeto, utilizei HTTP localmente, por meio do endereço `localhost:3000`, para facilitar os testes e observar as respostas geradas pelo servidor.

## 9. Desenvolvimento e testes do projeto

Para desenvolver o projeto, utilizei Node.js e seu módulo nativo `http`, sem utilizar frameworks. Separei as rotas em arquivos diferentes para deixar o código mais organizado e facilitar a manutenção.

As rotas implementadas foram:

- **`/`:** apresenta a página inicial e retorna o status 200.
- **`/antigo`:** realiza um redirecionamento permanente utilizando o status 301 e o cabeçalho Location.
- **`/busca`:** verifica se o parâmetro `termo` foi informado. Quando ele está ausente, retorna 400; quando está presente, retorna 200.
- **`/contato`:** aceita os métodos GET e POST e retorna 405 quando recebe um método não permitido, informando os métodos aceitos pelo cabeçalho Allow.
- **`/sobre`:** apresenta informações sobre o projeto e demonstra o uso de cabeçalhos como Content-Type e Cache-Control.

### Testes realizados

Utilizei o comando `curl.exe -i` para realizar requisições pelo terminal e visualizar os códigos de status, os cabeçalhos e o corpo das respostas.

Também utilizei as ferramentas de desenvolvedor do navegador, na aba Network, para observar as requisições e respostas HTTP.

Os testes ajudaram a entender como o servidor responde em diferentes situações e como os códigos de status mudam de acordo com a requisição.

**Evidências dos testes:** as capturas de tela devem ser salvas na pasta `docs/prints/`, acompanhadas de uma descrição explicando o que cada resultado demonstra.

## 10. Conclusão

Com a realização deste trabalho, consegui entender melhor como funciona a comunicação entre o navegador e o servidor por meio do protocolo HTTP. A parte prática ajudou a relacionar os conceitos estudados com situações reais, como os redirecionamentos, a validação de parâmetros e os métodos não permitidos.

Também pude aprender um pouco mais sobre Node.js, a organização de arquivos e a importância dos códigos de status e cabeçalhos nas respostas HTTP.

## 11. Referências

INTERNET ENGINEERING TASK FORCE (IETF). **RFC 9110: HTTP Semantics**. 2022. Disponível em: [https://www.rfc-editor.org/rfc/rfc9110](https://www.rfc-editor.org/rfc/rfc9110). Acesso em: 15 out. 2026.

MOZILLA. **HTTP**. MDN Web Docs. Disponível em: [https://developer.mozilla.org/pt-BR/docs/Web/HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP). Acesso em: 15 out. 2026.

OPENJS FOUNDATION. **HTTP | Node.js documentation**. Disponível em: [https://nodejs.org/api/http.html](https://nodejs.org/api/http.html). Acesso em: 15 out. 2026.

## 12. Declaração de uso de IA

OPENAI. ChatGPT (GPT-6). Ferramenta de inteligência artificial generativa.

Data de uso: 15 out. 2026.

Finalidade: auxílio na compreensão do enunciado, na organização do projeto, na explicação dos conceitos de HTTP e na revisão da documentação.

