const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

app.use(bodyParser.json());

let users = [];
let counter = 1;

//path: GET
app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/user', (req, res) => {
    let user = req.body;
    users.push(user);
    user.id = counter
    counter+=1;

    res.json({
    message: 'User added successfully',
    user: user
    });
});

//path: put /user/:id
app.patch('/user/:id', (req, res) => {
    let id = req.params.id;
    let updatedUser = req.body;
    let selectedIndex = users.findIndex(user => user.id == id);

    if (updatedUser.firstname) {
        users[selectedIndex].firstname = updatedUser.firstname;
    }

    if (updatedUser.lastname) {
        users[selectedIndex].lastname = updatedUser.lastname;
    }

    res.json({
        message: 'User updated successfully',
        data: {
            user: users[selectedIndex],
            indexUpdate: selectedIndex
        }
    });
});

app.delete('/users/:id',(req, res) => {
    let id = req.params.id;
    let selectedIndex = users.findIndex(user => user.id == id);
    users.splice(selectedIndex, 1);
    res.json({
        message: 'user delated',
        indexDelated: selectedIndex
    })
});

/*
GET /users ดึงข้อมูล
POST /  users เพิ่มข้อมูล

*/

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
