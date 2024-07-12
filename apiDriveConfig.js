import fs from 'fs';
import { google } from 'googleapis';

const GOOGLE_API_FOLDER_ID = '1CuKBwO0gsmMQ6SXkuV0LTESrkS3HF1WG';

async function uploadFile() {
    try {
        const auth = new google.auth.GoogleAuth({
            keyFile: './googlekey.json',
            scopes: ['https://www.googleapis.com/auth/drive']
        });

        const driveService = google.drive({
            version: 'v3',
            auth
        });

        const fileMetaData = {
            'name': 'image.png',
            'parents': [GOOGLE_API_FOLDER_ID]
        };

        const media = {
            mimeType: 'image/png',
            body: fs.createReadStream('./uploads/image.png') // Corrigido o caminho do arquivo
        };

        const response = await driveService.files.create({
            resource: fileMetaData,
            media: media,
            field: 'id' // Corrigido para "fields" no plural
        });
        return response.data.id;

    } catch (err) {
        console.log('Upload file error', err);
    }
}

uploadFile().then(data => {
    console.log(data);
    // https://drive.google.com/uc?export=view&id=
});
