let db = require('../../DBMYSQL/index');

exports.create = function(nombre, nickname, pass, correo , done) {
    let values = [nombre, nickname, pass, correo];

    db.get().getConnection(function (err,connection) {
        if (err){
            connection.release();
            console.log(err);
            return done(err);
        } else {
            connection.query('INSERT INTO usuarios (nombre, nickname, pass, correo) VALUES(?, ?, ?, ?)', values, function(err, result) {
                if (err)
                    return done(err);
                done(null, result.insertId);
            });

            connection.release();
        }

    });
};

exports.getAll = function(done) {
    db.get().getConnection(function (err,connection) {
        if (err){
            connection.release();
            console.log(err);
            return done(err);
        } else {
            connection.query('SELECT * FROM usuarios', function (err, rows)  {
                if (err)
                    return done(err);
                done(null, rows);
            });

            connection.release();
        }

    });

};