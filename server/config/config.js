var env = process.env.NODE_ENV || 'development';

// set JWT_SECRET value and MONGODB_URI
// from heroku config:set 
// ie. heroku config:set JWT_SECRET=fsdafa4132414
// heroku config:set MONGODB_URI='mongodb://<dbusername>:<dbpassword>@ds161210.mlab.com:61210/todoapp'

if (env === 'development' || env === 'test') {
  var config = require('./config.json');
  var envConfig = config[env];

  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];
  });
}
