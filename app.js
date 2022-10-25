const express = require('express');

const app = express();

// app.use((req, res, next) => {
//   console.log('First Middleware!');
//   next(); // Allows the request to continue to the next middleware in line
//   });

// app.use((req, res, next) => {
//   console.log('Second Middleware!');
//   res.send('<h1>Hello from Express!</h1>');
// })
app.use('/users', (req, res, next) => {
  console.log('Segunda rota');
  res.send('<h1>Segunda rota!</h1>');
});

app.use('/', (req, res, next) => {
  console.log('Primeira rota');
  res.send('<h1>Primeira rota!</h1>');
});


app.listen(3000);