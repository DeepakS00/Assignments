require('dotenv/config');
const express = require('express');
const app = express();
// const bodyParser = require('body-parser');--> not a required feature for express v 4.16+

const todo = [];
const port = process.env.PORT;

const middle1 = (req, res, next) => {
    console.log('First Middleware function defined globally.');
    next();
}

// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());

app.use(middle1); 

app.get('/', (req, res) => {
    if (todo.length > 0) {
        let list = "";
        for (let x of todo) {
            list += `<li>${x}</li>`;
        }
        res.send(`<h1 style='color:rgb(138, 64, 35)'>Here is your todo list:-</h1><br>
        <h3 style='color:rgb(138, 64, 35)'><ul>
        ${list}</ul>
        </h3>`);
    } else {
        res.send(`<h1 style='color:rgb(138, 64, 35);text-align:center'>
        Hello and Welcome to my ToDo App</h1>
        <br><br><h5 style='color:rgb(69, 44, 18);text-align:center'>
        To Enter your list please visit link/add, and add the list in json format</h5>`);
    }
});

app.use('/addList', (req, res, next) => {
    console.log('Second middleware called');
    next();
})

app.post('/addList', (req, res) => {
    for (let x of Object.keys(req.body)) {
        todo.push(req.body[x]);
    }
    res.send("Task completed successfully");
})

app.put('/updateList/:index', (req, res) => {
    let index = req.params.index;
    let newValue = req.body.new;
    todo[index] = newValue;
    res.send('The task is successfully updated');
})

app.patch('/changeList/:index', (req, res) => {
    let index = req.params.index;
    let newValue = req.body.new;
    todo[index] = newValue;
    res.send('The task is successfully updated');
})

app.delete('/delete/:index', (req, res) => {
    todo.splice(req.params.index, 1);
    res.send('Removed the specified task.');
})

app.listen(port, "localhost", () => {
    console.log(`The server is now running at http://localhost:${port}/`);
});

