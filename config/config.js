require('dotenv').config();

const development = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT || 'postgres',
  logging: false,
};

const production = {
  use_env_variable: 'DATABASE_URL',
  dialect: 'postgres',
  logging: false,
  dialectOptions: { ssl: { rejectUnauthorized: false } },
};

module.exports = {
  development,
  test: development,
  production,
};
