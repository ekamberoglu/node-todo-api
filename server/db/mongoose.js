var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let db = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: 'mongodb://<dbuser>:<dbpassword>@ds161210.mlab.com:61210/todoapp'
};
mongoose.connect( db.localhost || db.mlab);
// mongoose.connect(db.mlab);

module.exports = {mongoose};