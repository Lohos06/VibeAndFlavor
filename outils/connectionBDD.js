
import mysql from 'mysql2/promise';

export async function getDb() {
  return await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'vibeandflavor',
    password: ''
  });
}