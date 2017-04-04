var db = require('../../DBMYSQL/index');

exports.create = function(nombre, nickname, pass, correo , done) {
    var values = [nombre, nickname, pass, correo];

    db.get().query('INSERT INTO usuarios (nombre, nickname, pass, correo) VALUES(?, ?, ?, ?)', values, function(err, result) {
        if (err)
            return done(err);
        done(null, result.insertId);
    });
};

exports.getAll = function(done) {


    db.get().query('SELECT * FROM usuarios', function (err, rows) {
        if (err)
            return done(err);
        done(null, rows);
    });

};