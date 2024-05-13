const express = require('express');
const app = express();
const PORT = 3000;

const users = [
  { id: 1, 
    name: 'Phan Văn Toàn',
    age: 19
  },
  { id: 2, 
    name: 'Hoàng Văn Tiến Đạt' ,
    age: 19
  },
  { id: 3,
    name: 'Hồ Thành Tiến' ,
    age: 20
  },
  { id: 4,
    name: 'Quang Nguyễn',
    age: 21
  }
]

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.get('/about', (req, res) => {
  res.send('Ho thanh tien lỏ!');
});

app.get('/user/:id', (req, res) => {
  const user = users.filter(user => user.id === parseInt(req.params.id));
  res.json(user);
});

app.get('/user', (req, res) => {
  const id = parseInt(req.query.id);
  const user = users.find(user => user.id === id);
  res.json(user);
});
