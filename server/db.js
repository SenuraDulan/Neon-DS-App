import sqlite3 from 'sqlite3';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.resolve(__dirname, 'database.sqlite');

const db = new sqlite3.Database(dbPath);

export const setupDB = () => {
  db.serialize(() => {
    // Contacts Table
    db.run(`CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      firstName TEXT,
      lastName TEXT,
      email TEXT,
      message TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    // Users Table
    db.run(`CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE,
      name TEXT,
      picture TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    // WhatsApp Clicks (Simple metrics)
    db.run(`CREATE TABLE IF NOT EXISTS stats (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      event TEXT UNIQUE,
      count INTEGER DEFAULT 0
    )`);
    db.run(`INSERT OR IGNORE INTO stats (event, count) VALUES ('whatsapp_click', 0)`);
  });
};

export const insertContact = (firstName, lastName, email, message) => {
  return new Promise((resolve, reject) => {
    db.run(`INSERT INTO contacts (firstName, lastName, email, message) VALUES (?, ?, ?, ?)`, 
      [firstName, lastName, email, message], function(err) {
      if (err) reject(err);
      else resolve({ id: this.lastID });
    });
  });
};

export const logWhatsAppClick = () => {
  return new Promise((resolve, reject) => {
    db.run(`UPDATE stats SET count = count + 1 WHERE event = 'whatsapp_click'`, function(err) {
      if (err) reject(err);
      else resolve(true);
    });
  });
};

export const insertUser = (email, name, picture) => {
  return new Promise((resolve, reject) => {
    // Upsert equivalent since we specified UNIQUE on email
    db.run(`INSERT INTO users (email, name, picture) VALUES (?, ?, ?) 
            ON CONFLICT(email) DO UPDATE SET name=excluded.name, picture=excluded.picture`, 
      [email, name, picture], function(err) {
      if (err) reject(err);
      else resolve({ email, name, picture });
    });
  });
};
