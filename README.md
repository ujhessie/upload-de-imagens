# API de Upload de Imagens

Esta é uma API de upload de imagens usando Express.js e Google Drive. A API permite fazer upload de imagens, salvar as URLs no servidor e servir as imagens para um front-end.

## Funcionalidades

- Fazer upload de imagens
- Salvar URLs das imagens no servidor
- Exibir imagens carregadas em uma página web

## Requisitos

- Node.js
- Conta no Google Drive
- Credenciais de API do Google Drive

## Configuração

1. Clone o repositório:
    ```sh
    git clone https://github.com/usuario/repo.git
    cd repo
    ```

2. Instale as dependências:
    ```sh
    npm install
    ```

3. Crie um arquivo `googlekey.json` com as credenciais da API do Google Drive.

4. Crie um arquivo `multerConfig.js` com o seguinte conteúdo:

    ```javascript
    import multer from 'multer';
    import path from 'path';

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads/');
        },
        filename: function (req, file, cb) {
            cb(null, `${Date.now()}-${file.originalname}`);
        }
    });

    export { storage };
    ```

## Estrutura do Projeto

```plaintext
├── public
│   └── index.html
├── uploads
├── googlekey.json
├── multerConfig.js
├── server.js
└── googleDrive.js
