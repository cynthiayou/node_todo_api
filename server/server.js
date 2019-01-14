let express = require('express');
let bodyParser = require('body-parser');


let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');

let app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
})


app.listen(3000, () => {
    console.log('Starting on port 3000');
})




// let newTodo = new Todo({
//     text: '   edit this video   ',

// });

// newTodo.save().then( (doc) => {
//     console.log(JSON.stringify(doc, undefined, 4))
// }, (err) => {
//     console.log('Unable to save todo', err)
// });

// let newUser = new User({
//     email: "lucas@google.com   ",
// });

// newUser.save().then( (doc) => {
//     console.log("User saved");
//     console.log(JSON.stringify(doc, undefined, 4));
// }, (err)=>{
//     console.log('Unable to save user', err)
// })