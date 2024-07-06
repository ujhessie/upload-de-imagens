import multer from 'multer';
import path from 'path'; // Módulo que permite criar caminhos de forma correta e consistente.


// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       // Define o diretório onde os arquivos serão salvos
//     },
//     filename: (req, file, cb) => {
//       // Define o nome do arquivo que será salvo
//     }
//   });


export const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Define o diretório onde os arquivos serão salvos
        cb(null, path.resolve('uploads'))

        // O path.resolve() retorna um caminho relativo, ou seja, no mesmo diretório, chamado 'uploads'
    },
    filename: (req, file, cb) => {
        // Define o nome do arquivo que será salvo

        const time = new Date().getTime();
        cb(null, `${time}_${file.originalname}`)
    }
});