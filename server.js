import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 5001;
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory
console.log(`__filename = ${ __filename }...`);
console.log(`__dirname = ${ __dirname }...`);
// static file serve
app.use(express.static(__dirname));
// not found in static files, so default to index.html
app.use((req, res) => res.sendFile(`${ __dirname }/index.html`));
app.listen(process.env.PORT || port);
console.log(`swiss-knife is running on port ${ port }...`);
