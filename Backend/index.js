const express = require('express');
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;
const cors = require('cors');

app.use(cors());

const initMySQL = async () => {
    conn = await mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'root',
            database:'webdb',
            port:8700
    });
    console.log('connect to database')
}
app.use(bodyParser.json());


app.get('/testdb-new',async (req, res) => {
        try{
            const conn = await mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'root',
            database:'webdb',
            port:8700
        });
        const results = await conn.query('SELECT * FROM users');
        res.json(results[0])
        } catch (err) {
    console.error('Error',err);
    res.status(500).json({error:'Data faild'})
    }
});

//get
app.get('/users',async (req, res) => {
    const results = await conn.query('SELECT * FROM users');
    res.json(results[0]);
})

const validateData = (userData) => {
    let errors = [];
    if (!userData.firstName) {
        errors.push('First name is required');
    }
    if (!userData.lastName) {
        errors.push('Last name is required');
    }
    if (!userData.age) {
        errors.push('Age is required');
    }
    if (!userData.gender) {
        errors.push('Gender is required');
    }
    if (!userData.description) {
        errors.push('Description is required');
    }
    if (!userData.interests) {
        errors.push('Interests are required');
    }
    return errors;
}

//post
app.post('/users',async (req, res) => {
    try{let user = req.body;
        const errors = validateData(user);
        if (errors.length > 0){
            throw {
                message: 'กรุณากรอกให้ครบ',
                errors: errors
            }
        }
        const results = await conn.query('INSERT INTO users SET ?', user);
        console.log('results',results);
        res.json({
            message: 'user',
            data: results[0]
        });
    }catch(error) {
        console.log('ejhae')
        const errormessage = error.message || 'Error creating user';
        const statusCode = error.statusCode || [];
        res.status(statusCode).json({
            message: errormessage,
            errors: errors
        });
    }
})

app.get('/users/:id',async (req, res) => {
    try{
        const results = await conn.query('SELECT * FROM users WHERE id = ?', [id]);
    res.json(results[0]);
    }catch(error){
        console.error('Error',error);
        letsta
    }
    let id = req.params.id;  
})

app.put('/users/:id', async (req, res) => {
    try {
        let id = req.params.id
        let updatedUser = req.body;
        const results = await conn.query('UPDATE users SET ? WHERE id = ?', [updatedUser, id])
        if (results[0].affectedRows == 0) {
            throw { statusCode: 404, message: 'User not found' };
        }
        res.json({
            message: 'User updated successfully',
            data: updatedUser
        });
    }
    catch (error) {
        console.error('Error updating user:', error.message);
        let statusCode = error.statusCode || 500;
        res.status(statusCode).json({
            message: 'Error updating user',
            error: error.message
        });
    }
})

//deleted
app.delete('/users/:id', async (req, res) => {
    try {
        let id = req.params.id
        const results = await conn.query('DELETE FROM users WHERE id = ?', id)
        if (results[0].affectedRows == 0) {
            throw { statusCode: 404, message: 'User not found' };
        }   
        res.json({
            message: 'User deleted successfully'
        });
    }
    catch (error) {
        console.error('Error deleting user:', error.message);
        let statusCode = error.statusCode || 500;
        res.status(statusCode).json({
            message: 'Error deleting user',
            error: error.message
        });
    }
})

app.patch('/user/:id', (req,res)=>{
    let id = req.params.id;
    let updateUser = req.body;

    //  หา user ที่จาก id ส่งมา
    let selectedIndex = users.findIndex(user => user.id == id);

    // อัพเดตข้อมูล users
    users[selectedIndex].firstname = updateUser.firstname || users[selectedIndex].firstname;
    users[selectedIndex].lastname = updateUser.lastname || users[selectedIndex].lastname;

    if(updateUser.firstname){
        users[selectedIndex].firstname = updateUser.firstname;
    }
    if(updateUser.lastname){
        users[selectedIndex].lastname = updateUser.lastname;
    }

    res.json({
        message: 'User update successful',
        data: {
            user: updateUser,
            indexUpdate: selectedIndex
        }
    });
});
    
app.delete('/users/:id',(req, res) => {
    let id = req.params.id;
    //หา index id ที่ต้องการลบ
    let selectedIndex = users.findIndex(user => user.id == id);
    users.splice(selectedIndex, 1);
    //ลบ user ออกจาก users
    res.json({
            message: 'User deleted successful',
            indexDelete: selectedIndex
    });
});
app.listen(port,async ()=> {
    await initMySQL();
    console.log(`Server is running on http://localhost:${port}`);
});
