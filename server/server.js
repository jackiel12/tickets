const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());

const PORT = process.env.PORT || 3000;


//if in production, serve static files in the root folder
if(process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.resolve(__dirname, '../')));
    //serve the bundle from the dist folder
    app.use('/dist', express.static(path.resolve(__dirname, '../dist')));
}


app.listen(PORT, () => process.stdout.write(`listening on port: ${PORT}`));


