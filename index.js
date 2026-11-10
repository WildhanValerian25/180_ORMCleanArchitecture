require('dotenv').config();
const express = require('express');
const connectDatabase = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'API Komik - ORM Clean Architecture' });
});

async function startServer() {
  await connectDatabase();
  app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
  });
}

startServer();