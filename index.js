const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('from my second node');
});

const users = [
  { id: 0, name: 'shabana', email: 'shabana@g.com', phone: '01788223344' },
  { id: 1, name: 'shabnur', email: 'shabnur@g.com', phone: '01788223344' },
  {
    id: 2,
    name: 'shuchorita',
    email: 'shuchorita@g.com',
    phone: '01788223344',
  },
  { id: 3, name: 'shrabanti', email: 'shrabanti@g.com', phone: '01788223344' },
  { id: 4, name: 'susmita', email: 'susmita@g.com', phone: '01788223344' },
];

app.get('/users/', (req, res) => {
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

// app.METHOD
app.post('/users', (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log('hitting the post', req.body);
  // res.send(JSON.stringify(newUser));
  res.json(newUser);
});

// dynamic api
app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.get('/fruits', (req, res) => {
  res.send(['mango', 'banana', 'oranges', 'apple']);
});

app.get('/fruits/mangoes', (req, res) => {
  res.send('yummy yummy tok marka fazli');
});

app.listen(port, () => {
  console.log('listening to port', port);
});
