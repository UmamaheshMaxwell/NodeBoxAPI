var express = require('express');

var app = express();

app.listen(3000);

var Box = require('nodejs-box');

var box = new Box({
  access_token: 'VST5U3JNySWcnXuo80QlnwLfs0whK5rD',
  refreh_token: 'zljaGnOuhmVciYO7NNnHhEMWVscnua224dPkdKSaPmbdgU1ukdmnfSrJ1XKFNlsN'
});

box.files.upload('./files/file1.png', '0', function(err, res){
  console.log(res);
  console.log('file uploaded sucessfully');
});

box.files.download('66022899837', function(err, res){
  console.log(res);
});
