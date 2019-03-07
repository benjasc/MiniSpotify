'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/mean-2', (err, res) => {
    if (err) {
        throw err;
    } else {
        console.log('Conectado correctamente a MongoDB');

        app.listen(port, () => {
            console.log(`servidor escuchando en el puerto : ${port}`);
        });

    }
});