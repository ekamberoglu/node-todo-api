var env = process.env.NODE_ENV || 'development';

// Get development, test or production values
var config = require('./config.json');
var envConfig = config[env];

Object.keys(envConfig).forEach((key) => {
  process.env[key] = envConfig[key];
});
