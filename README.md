# Repositório para o projeto da imersão frontend da alura

### Comandos utilizados:

- Instalando json-server de modo global: `$ npm i json-server -g`
- Rodando json-server: `$ json-server --watch ./api-artists/artists.json --port 3000`

### 🔍 Problema com a busca no projeto:

- Se ao buscar dados no projeto você percebe que os resultados não estão como esperado, o problema pode estar na versão do json-server.

#### Como verificar a versão do json-server?

- Abra o terminal e digite: `$ json-server --version`
- Isso vai mostrar a versão instalada no seu sistema.
- Se for uma versão diferente de 0.17.0 ou 0.17.4, será necessário alterá-la.

#### Como mudar a versão?

- Primeiro, remova a versão atual com o comando: `$ npm uninstall -g json-server`
- Agora, instale a versão correta: `$ npm install -g json-server@0.17`
