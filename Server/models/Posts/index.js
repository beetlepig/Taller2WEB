let db = require('../../DBMYSQL/index');


exports.getAll = function(done) {
    db.get().getConnection(function (err,connection) {
        if (err){
            connection.release();
            console.log(err);
            return done(err,null);
        } else {
            connection.query('SELECT * FROM posts', function (err, rows)  {
                if (err)
                    return done(err);
                done(null, rows);
            });

            connection.release();
        }

    });

};


exports.create = function(id_usuario,titulo, subtitulo, contenido, target, current , img , done) {
    let values = [id_usuario,current, titulo, subtitulo, contenido, target, img];

    db.get().getConnection(function (err,connection) {
        if (err){
            connection.release();
            console.log(err);
            return done(err);
        } else {
            connection.query('INSERT INTO usuarios (nombre, apellido, nickname, pass, correo, imgsrc) VALUES(?, ?, ?, ?, ?, ?)', values, function(err, result) {
                if (err)
                    return done(err);
                done(null, result.insertId);
            });

            connection.release();
        }

    });
};
