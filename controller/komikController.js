const db = require('../models');

async function getAllKomik(req, res) {
  try {
    const komik = await db.Komik.findAll({ order: [['id', 'ASC']] });
    res.status(200).json(komik);
  } catch (err) {
    console.error('Error mengambil data komik:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getKomikById(req, res) {
  try {
    const komik = await db.Komik.findByPk(req.params.id);
    if (!komik) {
      return res.status(404).json({ error: 'Komik tidak ditemukan' });
    }
    res.status(200).json(komik);
  } catch (err) {
    console.error('Error mengambil data komik:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function createKomik(req, res) {
  const { title, description, author } = req.body;
  try {
    if (!title || !author) {
      return res.status(400).json({ error: 'title dan author wajib diisi' });
    }
    const newKomik = await db.Komik.create({ title, description, author });
    res.status(201).json(newKomik);
  } catch (err) {
    console.error('Error menambah komik:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function updateKomik(req, res) {
  const { title, description, author } = req.body;
  try {
    const komik = await db.Komik.findByPk(req.params.id);
    if (!komik) {
      return res.status(404).json({ error: 'Komik tidak ditemukan' });
    }
    if (title !== undefined) komik.title = title;
    if (description !== undefined) komik.description = description;
    if (author !== undefined) komik.author = author;
    await komik.save();
    res.status(200).json(komik);
  } catch (err) {
    console.error('Error mengubah komik:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function deleteKomik(req, res) {
  try {
    const komik = await db.Komik.findByPk(req.params.id);
    if (!komik) {
      return res.status(404).json({ error: 'Komik tidak ditemukan' });
    }
    await komik.destroy();
    res.status(200).json({ message: `Komik dengan id ${req.params.id} berhasil dihapus` });
  } catch (err) {
    console.error('Error menghapus komik:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  getAllKomik,
  getKomikById,
  createKomik,
  updateKomik,
  deleteKomik,
};
