const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var todoId = '58eee4b0698cbb23b79e4433';
var userId = '58edd2eb5252fb1013ffd2a8';

// if (!ObjectID.isValid(todoId)) {
//   console.log('ID not valid');
// }
// Todo.find({
//   _id: todoId
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: todoId
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(todoId).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found for todo');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

User.findById(userId).then((user) => {
  if (!user) {
    return console.log('Unable to find User')
  }

  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});
