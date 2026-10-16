const express = require('express');
const router = express.Router();

const bukuController = require('../controllers/buku.controller');

router.get('/', bukuController.getHome);

router.get('/about', bukuController.getAbout);

router.get('/katalog', bukuController.getKatalog);

router.post('/katalog/tambah', bukuController.tambahBuku);

module.exports = router;