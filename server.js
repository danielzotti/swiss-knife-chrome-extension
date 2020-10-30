var express = require('express');
var app = express();
const port = 80;
// static file serve
app.use(express.static(__dirname));
// not found in static files, so default to index.html
app.use((req, res) => res.sendFile(`${ __dirname }/popup.html`));
app.listen(port);
console.log(`swiss-knife is running on port ${ port }...`);
