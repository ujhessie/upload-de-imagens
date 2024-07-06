import express from "express";
import { storage } from "./multerConfig.js"; // Importa a configuração de armazenamento
import multer from "multer";

const app = express(); // Cria uma instância do express

const upload = multer({ storage: storage }); // Cria o middleware de upload usando a configuração de armazenamento

app.use("/files", express.static('uploads'))

// Define uma rota para upload de arquivos
app.post("/upload", upload.single("file"), (req, res) => {
    res.send("Arquivo enviado com sucesso!");
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
