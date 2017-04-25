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


exports.create = function(id_usuario,titulo, subtitulo, contenido, target, current , imgsrc , done) {
    let values= [id_usuario,titulo,contenido , subtitulo, target, current, imgsrc];

    db.get().getConnection(function (err,connection) {
        if (err){
            connection.release();
            console.log(err);
            return done(err);
        } else {
            connection.query('INSERT INTO posts (id_usuario, titulo, contenido, subtitulo, target, current, imgsrc) VALUES(?, ?, ?, ?, ?, ?, ?)', values, function(err, result) {
                if (err)
                    return done(err);
                    console.log(err);
                done(null, result.insertId);
            });

            connection.release();
        }

    });
};
