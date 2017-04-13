const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({})
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '58f00a0bca7dae7ef41d9ccb'}).then((todo) => {

});

Todo.findByIdAndRemove('58f00a0bca7dae7ef41d9ccb').then((todo) => {
  console.log(JSON.stringify(todo, undefined, 2));
});
