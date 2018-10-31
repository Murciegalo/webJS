const path = require('path');

module.exports = {
  entry: './assets/app/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};
