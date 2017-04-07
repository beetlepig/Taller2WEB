var DB= require('../../models/users');

var createUser = function (req, res) {
    var nombre = req.body.nombre;
    var nickname = req.body.nickname;
    var pass = req.body.pass;
    var correo = req.body.correo;

    DB.create(nombre, nickname, pass, correo, function(err, result) {
            if (err) {
                res.status(500).json(err);
            }else {
                res.status(200).json(result);
            }
        });

};



var getUsers = function (req, res) {
    DB.getAll(function(error, photos) {
        if (!error) {
            res.status(200).json(photos);
        } else {

            res.json(500,error);
        }
    });
};
 module.exports = {
     createUser,
     getUsers
 };
