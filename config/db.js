const db = require('../models');

async function connectDatabase() {
  try {
    await db.sequelize.authenticate();
    console.log('Koneksi database berhasil.');

    // Membuat / menyesuaikan tabel komik otomatis dari model
    await db.sequelize.sync({ alter: true });
    console.log('Tabel database tersinkronisasi.');
  } catch (err) {
    console.error('Gagal koneksi database:', err.message);
    process.exit(1);
  }
}

module.exports = connectDatabase;
