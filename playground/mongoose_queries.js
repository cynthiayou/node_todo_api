const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const{Todo} = require('./../server/models/todo');
const{User} = require('./../server/models/user');

// User.insertMany([{
//     email: 'hello@gmail.com'
// }, {
//     email: 'google@gmail.com'
// }]);

// let id = "5c3bff1f9209254a9420051511";

// if (!ObjectID.isValid(id)){
//     return console.log("ID not valid");
// }
 
// // Todo.find({
// //     completed: false
// // }).then( (todos) => {
// //     console.log('Todos', todos);
// // });

// // Todo.findOne({
// //     _id: id
// // }).then( (todo) => {
// //     console.log('Todo', todo);
// // });

// Todo.findById(id).then( (todo) => {
//     if (!todo){
//         return console.log("ID not found");
//     }

//     console.log('Todo by Id', todo);
// }).catch((e) => {
//     console.log(e);
// });
let id = "5c3bb8bb024731435c73a857aa";

User.findById(id).then((user) =>{
    if (!user) {
        return console.log("Unable to find user")
    }
    console.log(JSON.stringify(user, undefined, 4));
}, (err) => {
    console.log(err);
})

