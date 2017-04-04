
var mysql = require('mysql');
//var async = require('async');

var pool = mysql.createConnection({
    host: '200.3.193.22',
    user: 'P09652_1_9',
    password: 'mQ9YZPGe',
    database: "P09652_1_9"
});




exports.connect = function(done) {
   pool.connect(function (err) {
       if (err){

           return done(err);
       }else{

           return done (null);
       }
   });
};

exports.get = function() {
    return pool;
};