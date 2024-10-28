const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');
const setupSwagger = require('./swagger');  

const app = express();
app.use(bodyParser.json());

setupSwagger(app);

app.get('/', (req, res)=>{
    res.send("Welcome to the Book Management API. It is a simple CRUD API for managing books built with Node.js, Express, MySQL, and Swagger for API documentation. <br>To test API using Swagger UI please visit <a href='http://localhost:3000/api-docs'>http://localhost:3000/api-docs</a>")
})


app.use('/books', bookRoutes);


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
  console.log('API docs available at http://localhost:3000/api-docs');
});
