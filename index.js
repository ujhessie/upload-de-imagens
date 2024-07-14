import express from "express";
import multer from "multer";
import { storage } from "./src/config/multerConfig.js";
import { uploadFile } from "./src/services/googleDrive.js";
import fs from "fs";
import path from "path";

const app = express();
const upload = multer({ storage: storage });

const imageUrls = [];

// Configuração para servir arquivos estáticos
app.use(express.static("public"));
app.use("/files", express.static("uploads"));

// Rota para lidar com o upload de arquivos
app.post("/upload", upload.single("file"), async (req, res) => {
    const filePath = path.resolve("uploads", req.file.filename);
    const fileUrl = await uploadFile(filePath, req.file.filename);

    if (fileUrl) {
        imageUrls.push(fileUrl);
    }

    // Opcional: Remover o arquivo local após o upload para o Google Drive
    fs.unlinkSync(filePath);

    res.redirect("/"); // Redireciona de volta para a página principal após o upload
});

// Rota para obter a lista de URLs das imagens
app.get("/images", (req, res) => {
    res.json(imageUrls);
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
