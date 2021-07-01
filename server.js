const express = require('express');
const jsonServer = require('json-server');
const path = require('path');
const faker = require('faker');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/fakeUsers/:number', (req, res) => {
  const number = parseInt(req.params.number, 10);
  const result = [];
  for (let i = 0; i < number; i++) {
    const person = faker.helpers.createCard();
    result.push({
      id: Date.now() + Math.floor(Math.random() * 100000),
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      birthday: faker.date.past(),
      street: person.address.streetA,
      place: person.address.city,
      postcode: person.address.zipcode,
      country: person.address.country,
      phone: person.phone,
      email: person.email,
    });
  }

  res.json(result);
});

app.use('/', (req, res, next) => {
  if (
    req.path.startsWith('/list') ||
    req.path.startsWith('/edit') ||
    req.path.startsWith('/detail') ||
    req.path.startsWith('/new')
  ) {
    res.sendFile(path.join(__dirname + '/build/index.html'));
  } else {
    next();
  }
});

app.use('/', express.static('build'));
app.use('/', jsonServer.router('data.json'));

app.listen(3001, () => {
  console.log('Server is listening to http://localhost:3001');
});
