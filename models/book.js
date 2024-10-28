const db = require('../db');

class Book {
  static async findAll() {
    const [rows] = await db.query('SELECT * FROM books');
    return rows;
  }

  static async findById(id) {
    const [rows] = await db.query('SELECT * FROM books WHERE id = ?', [id]);
    return rows[0];
  }

  static async create(data) {
    const { title, author, published_year } = data;
    const [result] = await db.query(
      'INSERT INTO books (title, author, published_year) VALUES (?, ?, ?)',
      [title, author, published_year]
    );
    return result.insertId;
  }

  static async update(id, data) {
    const { title, author, published_year } = data;
    await db.query(
      'UPDATE books SET title = ?, author = ?, published_year = ? WHERE id = ?',
      [title, author, published_year, id]
    );
  }

  static async delete(id) {
    await db.query('DELETE FROM books WHERE id = ?', [id]);
  }
}

module.exports = Book;
