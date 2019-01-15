const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const{Todo} = require('./../server/models/todo');
const{User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// })

Todo.findOneAndRemove({_id: '5c3ca7164947f20530009582'}).then((todo) => {
    console.log(todo);
})

// Todo.findByIdAndRemove('5c3ca7164947f20530009582').then((todo) => {
//     console.log(todo);
// })


// let id = "5c3bb8bb024731435c73a857aa";

// User.findById(id).then((user) =>{
//     if (!user) {
//         return console.log("Unable to find user")
//     }
//     console.log(JSON.stringify(user, undefined, 4));
// }, (err) => {
//     console.log(err);
// })

