import express from 'express';
const app = express();
const port = 5001;
// static file serve
app.use(express.static(__dirname));
// not found in static files, so default to index.html
app.use((req, res) => res.sendFile(`${ __dirname }/index.html`));
app.listen(process.env.PORT || port);
console.log(`swiss-knife is running on port ${ port }...`);
