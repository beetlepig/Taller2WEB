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
