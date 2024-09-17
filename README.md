# Configurações Essenciais do Projeto

Este guia fornece os passos necessários para configurar o Blob Storage na Azure e rodar o projeto. Siga cada passo para garantir que tudo esteja configurado corretamente.

## Passo 1: Criar o Serviço do Blob Storage

1. Acesse o [portal da Azure](https://portal.azure.com/#home).
2. Crie um novo serviço de Blob Storage conforme necessário.

## Passo 2: Configurar o CORS para o Blob Storage

1. Dentro da visualização dos dados do seu container para o Blob, vá para o menu **Configurações** > **Resource Sharing (CORS)**.
2. Adicione uma nova configuração com os seguintes padrões:
   - **Allowed Origins**: `*`
   - **Allowed Methods**: `GET, POST`
   - **Allowed Headers**: `*`
   - **Exposed Headers**: `*`
   - **Max Age**: `3600`

## Passo 3: Criar um Token de Acesso

1. Acesse o menu **Security + Networking** para criar um token de acesso.
2. Configure a chave de acesso:
   - Ajuste o nível de acesso conforme o tipo de recurso (**Allowed Resource Types**).
   - Defina uma data de expiração para a chave de acesso.
   - Permita o protocolo HTTP (**Allowed Protocols**).
3. Gere a nova chave.

## Passo 4: Alimentar as Informações no Arquivo de Configuração

1. Com o serviço do Blob Storage criado e configurado, insira as informações no arquivo `src/ConfigAzure/keys.js`.

## Passo 5: Rodar a Aplicação do JSON Server

1. Navegue até o diretório do servidor com os seguintes comandos no terminal:
```sh
  cd src
  cd Server
  npx json-server --watch db.json --port 3333
```

## Passo 6: Rodar o Projeto React

No diretório raiz do projeto, inicie o servidor de desenvolvimento do React com o comando
```sh
npm start
```