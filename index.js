import express from 'express';
import multer from 'multer';
import { storage } from './multerConfig.js';
import { uploadFile } from './googleDrive.js';
import fs from 'fs';
import path from 'path';

const app = express();
const upload = multer({ storage: storage });

const imageUrls = [];

app.use("/files", express.static('uploads'));

app.post("/upload", upload.single("file"), async (req, res) => {
    const filePath = path.resolve('uploads', req.file.filename);
    const fileUrl = await uploadFile(filePath, req.file.filename);

    if (fileUrl) {
        imageUrls.push(fileUrl);
    }

    // Opcional: Remover o arquivo local após o upload para o Google Drive
    fs.unlinkSync(filePath);

    res.send("Arquivo enviado com sucesso!");
});

app.get("/images", (req, res) => {
    res.json(imageUrls);
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
