import path from 'path';
import fs from 'fs';
import { uploadFile } from '../services/googleDrive.js';

const imageUrls = [];

export const handleFileUpload = async (req, res) => {
    const filePath = path.resolve('uploads', req.file.filename);
    const fileUrl = await uploadFile(filePath, req.file.filename);

    if (fileUrl) {
        imageUrls.push(fileUrl);
    }

    // Opcional: Remover o arquivo local após o upload para o Google Drive
    fs.unlinkSync(filePath);

    res.redirect('/');
};

export const getImageUrls = (req, res) => {
    res.json(imageUrls);
};
