const daftarBuku = [
    {
        nama: 'Pemrograman Web',
        harga: 85000,
        kategori: 'Teknologi'
    },
    {
        nama: 'Dasar JavaScript',
        harga: 75000,
        kategori: 'Teknologi'
    },
    {
        nama: 'Belajar Matematika',
        harga: 60000,
        kategori: 'Pendidikan'
    }
];

exports.getHome = (req, res) => {
    res.render('pages/home', {
        judul: 'Selamat Datang di Perpustakaan'
    });
};

exports.getAbout = (req, res) => {
    res.render('pages/about');
};

exports.getKatalog = (req, res) => {
    res.render('pages/katalog', {
        daftarBuku: daftarBuku
    });
};

exports.tambahBuku = (req, res) => {
    console.log('Data buku yang diterima:');
    console.log(req.body);

    daftarBuku.push({
        nama: req.body.nama,
        harga: Number(req.body.harga),
        kategori: req.body.kategori
    });

    res.redirect('/katalog');
};