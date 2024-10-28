# 📚 Book Management API

A simple CRUD API for managing books built with Node.js, Express, MySQL, and Swagger for API documentation.

## 🚀 Features
- **CRUD operations**: Create, Read, Update, Delete books
- **MySQL**: Uses MySQL as the database to store book data
- **Swagger**: API documentation with Swagger UI
- **Environment Configuration**: Sensitive data is stored securely using environment variables

## 🛠️ Tech Stack
- **Backend**: Node.js, Express
- **Database**: MySQL
- **Documentation**: Swagger

## 📂 Project Structure

```csharp
├── .env                # Environment variables
├── db.js               # MySQL connection setup
├── index.js            # Entry point of the application
├── routes
│   └── bookRoutes.js   # API routes for book management
├── controllers
│   └── bookController.js   # Book controllers for handling requests
├── models
│   └── book.js         # Book model with MySQL queries
└── swagger.js          # Swagger configuration file

```

## 📑 Getting Started

### Prerequisites
- Node.js and npm
- MySQL Server
- MySQL Workbench (optional, for database management)

### Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/sahejadkadivar/Book-Management-API.git
   cd book-management-api
   ```

2. **Install dependencies**:
   ```bash
    npm install
   ```

3. **Create a `.env` file with your database credentials:**:
   ```bash
    DB_HOST=localhost
    DB_USER=yourUsername
    DB_PASSWORD=yourPassword
    DB_NAME=yourDatabase
    DB_PORT=3306
   ```

4. **Set up the database**:
    - Use MySQL Workbench or any MySQL client to create a database with the name provided in your `.env` file (`DB_NAME`).
    - Create a books table:
   ```bash
    CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    published_year INT
    );
   ```


## Running the Server

1. **Start the server:**
```bash
    node index.js
```

2. **Open `http://localhost:3000` to verify the server is running.**

3. **Access the Swagger API documentation at:**
```bash
    http://localhost:3000/api-docs
```


## 📄 API Endpoints
- **GET** `/books` - Retrieve all books
- **GET** `/books/:id` - Retrieve a single book by ID
- **POST** `/books` - Create a new book
- **PUT** `/books/:id` - Update a book by ID
- **DELETE** `/books/:id` - Delete a book by ID

## 📝 Documentation

Swagger UI documentation is available at `http://localhost:3000/api-docs`.

## 🌐 Example Requests
**Add a Book**
```bash
   POST /books
    Content-Type: application/json
    {
    "title": "1984",
    "author": "George Orwell",
    "published_year": 1949
    }
```

**Retrieve All Books**
```bash
   GET /books
```
## Contributing
Feel free to contribute to this project by creating issues or submitting pull requests. Your contributions are welcome!

## Authors

- [sahejadkadivar](https://github.com/sahejadkadivar)

## 🐦 Follow Me:

> [LinkedIn](https://www.linkedin.com/in/er-sahejad-kadivar-667bb9227)


I hope you like the project. Happy Coding! :)

