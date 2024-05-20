const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
// app.use(express.urlencoded())
// app.use(express.json())

let users = [
  { id: 1, name: 'Phan Văn Toàn', age: 19 },
  { id: 2, name: 'Hoàng Văn Tiến Đạt', age: 19 },
  { id: 3, name: 'Hồ Thành Tiến', age: 20 },
  { id: 4, name: 'Quang Nguyễn', age: 21 },
  { id: 5, name: 'Giáo Phan', age: 17 }
];
// Check token
const checkToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (token === 'Bearer token') {
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};
// Get all usersa
app.get('/users', checkToken, (req, res) => {
  console.log('GET all users');
  res.json(users);
});
// Get detail info user by id
app.get('/users/:id', checkToken, (req, res) => {
  const user = users.find(user => user.id === parseInt(req.params.id));
  console.log(`GET user with id ${req.params.id}`);
  res.json(user);
});
// post user
app.post('/users', checkToken, (req, res) => {
  const newUser = req.body;
  console.log('POST new user:', newUser);
  users.push(newUser);
  res.json(newUser);
});
// Put user
app.put('/users/:id', checkToken, (req, res) => {
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
app.delete('/users/:id', checkToken, (req, res) => {
  const userId = parseInt(req.params.id);
  console.log(`DELETE user with id ${userId}`);
  users = users.filter(user => user.id !== userId);
  res.json(users);
});
// PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});