import fs from 'fs';
import { google } from 'googleapis';
import mime from 'mime-types';

const GOOGLE_API_FOLDER_ID = '1CuKBwO0gsmMQ6SXkuV0LTESrkS3HF1WG';

export async function uploadFile(filePath, fileName) {
    try {
        const auth = new google.auth.GoogleAuth({
            keyFile: './googlekey.json',
            scopes: ['https://www.googleapis.com/auth/drive']
        });

        const driveService = google.drive({
            version: 'v3',
            auth
        });

        const mimeType = mime.lookup(filePath) || 'application/octet-stream';

        const fileMetaData = {
            'name': fileName,
            'parents': [GOOGLE_API_FOLDER_ID]
        };

        const media = {
            mimeType: mimeType,
            body: fs.createReadStream(filePath)
        };

        const response = await driveService.files.create({
            resource: fileMetaData,
            media: media,
            fields: 'id'
        });

        const fileId = response.data.id;
        const fileUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
        return fileUrl;

    } catch (err) {
        console.log('Upload file error', err);
    }
}
