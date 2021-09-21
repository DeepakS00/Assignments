require('dotenv/config');
const express = require('express');
const app = express();
// const bodyParser = require('body-parser');--> not a required feature for express v 4.16+

const todo = [];
const port = process.env.PORT || 2021;

const middle1 = (req, res, next) => {
    console.log('First Middleware function defined globally.');
    next();
}

const middle2 = (req, res, next) => {
    console.log('Second middleware called');
    next();
};

// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());

app.use(middle1); 

app.get('/', (req, res) => {
    res.send(`<h1 style='color:rgb(138, 64, 35);text-align:center'>
        Hello and Welcome to my Todo App
        </h1>
        <br><br><h5 style='color:rgb(69, 44, 18);text-align:center'>
        To Enter your list please visit /todo, and add or see the list.
        </h5>`);
});

app.get('/todo', (req, res) => {
    if (todo.length > 0) {
        let list = "";
        for (let x of todo) {
            list += `<li>${x}</li>`;
        }
        res.send(`<h1 style='color:rgb(138, 64, 35)'>
        Here is your todo list:-
        </h1><br>
        <h3 style='color:rgb(138, 64, 35)'>
        <ul>${list}</ul>
        </h3>`);
    } else {
        res.send('Enter the tasks in your list');
    }
});

app.post('/todo', middle2, (req, res) => {
    todo.push(...Object.values(req.body));
    res.send("Task completed successfully");
})

app.put('/todo/:index', (req, res) => {
    const index = (req.params.index > todo.length) ? todo.length : req.params.index;
    todo[index] = Object.values(req.body)[0];
    res.send('The task is successfully updated');
})

app.patch('/todo/:index', (req, res) => {
    const index = (req.params.index > todo.length) ? todo.length : req.params.index;
    todo[index] = Object.values(req.body)[0];
    res.send('The task is successfully updated');
})

app.delete('/todo/:index', (req, res) => {
    todo.splice(req.params.index, 1);
    res.send('Removed the specified task.');
})

app.listen(port, "localhost", () => {
    console.log(`The server is now running at http://localhost:${port}/`);
});

