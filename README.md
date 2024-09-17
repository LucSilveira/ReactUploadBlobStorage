# Configurações essenciais do projeto

## Passo Um

Criar o serviço do Blob Storage no seu portal da azure https://portal.azure.com/#home

## Passo Dois

Dentro da visualização dos dados do seu container para o Blob, acessar o menu de Configurações > Resource Sharing (CORS)

Ao acessar o menu de configuração do CORS, criar um novo acesso com o padrão
Allowed Origins : *
Allowed Method : GET, POST
Allowed Headers : *
Exposed Headers : *
Max Age : 3600

## Passo Três

Ao configurar o CORS do seu serviço, acessar o menu Security + Networking para criar um token de acesso

Ao acessar o menu para criar uma chave de acesso, alterar o nível de acesso de acordo com o tipo de recurso (Allowed Resource Types),
definir uma data de expiração da chave de acesso e permitir o tipo de protocolo para HTTP (Allowed Protocols).

Configurado os itens acima, gerar a nova chave.

## Passo Quatro

Com o serviço do Blob Storage criado e configurado, alimentar as informações no arquivo src > ConfigAzure > keys.js

## Passo Cinco

Rodar a aplicação do json server, colocando os seguintes comandos no terminal

cd src
cd Server
npx json-server -w db.json --port 3333

## Passo Seis

Rodar o projeto React com o comando 'npm start' no terminal
