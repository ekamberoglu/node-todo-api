var env = process.env.NODE_ENV || 'development';

// mlab: 'mongodb://<dbuser>:<dbpassword>@ds161210.mlab.com:61210/todoapp'

if (env === 'development') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
} else if (env === 'test') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
} else {
  process.env.MONGODB_URI = 'mongodb://kayroc:ekamber0glu@ds161210.mlab.com:61210/todoapp';
}
