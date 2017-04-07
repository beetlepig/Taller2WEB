var DB= require('../../models/users');

var createUser = function (req, res) {
    var nombre = req.body.nombre;
    var nickname = req.body.nickname;
    var pass = req.body.pass;
    var correo = req.body.correo;

    DB.create(nombre, nickname, pass, correo, function(err, result) {
            if (err) {
                res.status(500).json(err);
                console.log(err);
            }else {
                res.status(200).json(result);
            }
        });

};



var getUsers = function (req, res) {
    DB.getAll(function(error, users) {
        if (!error) {
            res.status(200).json(users);
        } else {
            res.status(500).json(error);
            console.log(error);
        }
    });
};
 module.exports = {
     createUser,
     getUsers
 };
