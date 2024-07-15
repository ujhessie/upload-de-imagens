# API de Upload de Arquivos

Esta API permite que os usuários façam upload de arquivos de imagem e os armazenem no Google Drive. Ela fornece endpoints para fazer upload de arquivos e recuperar a lista de URLs dos arquivos enviados.

## Índice

- [Recursos](#recursos)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Uso](#uso)
- [Endpoints](#endpoints)
- [Licença](#licença)

## Recursos

- Upload de arquivos de imagem.
- Armazenar arquivos no Google Drive.
- Recuperar URLs dos arquivos enviados.

## Pré-requisitos

- Node.js (v12 ou superior)
- Projeto no Google Cloud com a API do Google Drive habilitada
- Arquivo de credenciais da conta de serviço do Google (`googlekey.json`)

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/seuusuario/api-upload-arquivos.git
    cd api-upload-arquivos
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

## Configuração

1. Coloque o arquivo de credenciais da conta de serviço do Google (`googlekey.json`) no diretório raiz do projeto.

2. Crie um arquivo `.env` no diretório raiz e adicione o seguinte:
    ```env
    GOOGLE_API_FOLDER_ID=seu_id_da_pasta_no_google_drive
    ```

## Uso

1. Inicie o servidor:
    ```bash
    npm start
    ```

2. Abra seu navegador e navegue até `http://localhost:3000` para acessar a interface de upload.

## Endpoints

### `POST /upload`

Faz o upload de um arquivo de imagem para o Google Drive.

#### Requisição

- `Content-Type`: `multipart/form-data`
- `file`: O arquivo de imagem a ser enviado.

#### Resposta

- Redireciona para a página principal (`/`) após um upload bem-sucedido.

### `GET /images`

Recupera uma lista de URLs das imagens enviadas.

#### Resposta

- `200 OK`: Um array de URLs de imagens.

```json
[
    "https://drive.google.com/uc?export=view&id=exemplo1",
    "https://drive.google.com/uc?export=view&id=exemplo2"
]
