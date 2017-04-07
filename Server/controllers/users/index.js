let DB= require('../../models/users');

let createUser = function (req, res) {
    let nombre = req.body.nombre;
    let nickname = req.body.nickname;
    let pass = req.body.pass;
    let correo = req.body.correo;

    DB.create(nombre, nickname, pass, correo, function(err, result) {
            if (err) {
                res.status(500).json(err);
                console.log(err);
            }else {
                res.status(200).json(result);
            }
        });

};



let getUsers = function (req, res) {
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
