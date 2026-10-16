const express = require('express');
const app = express();

const bukuRoutes = require('./routes/buku.routes');

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use('/', bukuRoutes);

app.listen(3000, () => {
    console.log('Server Perpustakaan Aktif!');
});