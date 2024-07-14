import express from 'express';
import multer from 'multer';
import { storage } from './config/multerConfig.js';
import { handleFileUpload, getImageUrls } from './controllers/fileController.js';

const app = express();
const upload = multer({ storage: storage });

// Configuração para servir arquivos estáticos
app.use(express.static('public'));
app.use('/files', express.static('uploads'));

// Rota para lidar com o upload de arquivos
app.post('/upload', upload.single('file'), handleFileUpload);

// Rota para obter a lista de URLs das imagens
app.get('/images', getImageUrls);

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
