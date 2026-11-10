# 📚 180_ORMCleanArchitecture

REST API CRUD data komik untuk Praktikum 9 PWS, menggunakan **Express.js**, **Sequelize**, dan **PostgreSQL**.

## Tabel `komik`

| Kolom | Tipe |
|-------|------|
| id | INTEGER (PK, auto increment) |
| title | VARCHAR |
| description | TEXT |
| author | VARCHAR |

## Cara Menjalankan

```bash
npm install
cp .env.example .env   # isi password PostgreSQL
npm run db:create
npm run dev
```

## Endpoint

| Method | Endpoint | Fungsi |
|--------|----------|--------|
| GET | `/api/komik` | Semua komik |
| GET | `/api/komik/:id` | Komik berdasarkan id |
| POST | `/api/komik` | Tambah komik |
| PUT | `/api/komik/:id` | Ubah komik |
| DELETE | `/api/komik/:id` | Hapus komik |

## Bukti Pengerjaan

**POST** — tambah komik
<img width="1920" height="1080" alt="POST" src="https://github.com/user-attachments/assets/0e88b25f-fe68-4f9c-9529-f8d0b79db771" />

**GET** — semua komik
<img width="1920" height="1080" alt="GET semua" src="https://github.com/user-attachments/assets/4f724d11-b834-4782-a7d4-5b56a580bec5" />

**GET by ID** — komik id 1
<img width="1920" height="1080" alt="GET by id" src="https://github.com/user-attachments/assets/47bad97a-cd9b-435c-b2a5-074778e11005" />

**PUT** — ubah komik id 1
<img width="1920" height="1080" alt="PUT" src="https://github.com/user-attachments/assets/c24a8798-a29c-405b-a4d6-fd3c642fc3d4" />

**DELETE** — hapus komik id 2
<img width="1920" height="1080" alt="DELETE" src="https://github.com/user-attachments/assets/2bddbaeb-48fb-4862-bcc5-c3252c584bd0" />

**GET** — data setelah dihapus
<img width="1920" height="1080" alt="GET setelah delete" src="https://github.com/user-attachments/assets/a9df9382-7542-4008-ae86-b3a1c64fcb2d" />
