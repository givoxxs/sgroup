const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
// app.use(express.urlencoded())
// app.use(express.json())

const fs = require('fs')

app.get('/data', (req, res) => {
  const data = fs.readFileSync('data.json', 'utf8');
  res.json(JSON.parse(data));
});

// Get all usersa
app.get('/users',  (req, res) => {
  console.log('GET all users');
  res.json(users);
});
// Get detail info user by id
app.get('/users/:id',  (req, res) => {
  const user = users.find(user => user.id === parseInt(req.params.id));
  console.log(`GET user with id ${req.params.id}`);
  res.json(user);
});
// post user
app.post('/users',  (req, res) => {
  const newUser = req.body;
  console.log('POST new user:', newUser);
  users.push(newUser);
  res.json(newUser);
});
// Put user
app.put('/users/:id',  (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedUser = req.body;
  console.log(`PUT user with id ${userId}:`, updatedUser);
  const index = users.findIndex(user => user.id === userId);
  if (index !== -1) {
    users[index] = updatedUser;
    res.json(users[index]);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});
// delete user
app.delete('/users/:id',  (req, res) => {
  const userId = parseInt(req.params.id);
  console.log(`DELETE user with id ${userId}`);
  users = users.filter(user => user.id !== userId);
  res.json(users);
});
// ngu
app.get('/users/ngu', (req, res) => {
    res.send("ngu ngu ngu");
    res.json({messsage: "ngu ngu ngu"})
})
// PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
