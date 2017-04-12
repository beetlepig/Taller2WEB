let DB= require('../../models/users');
let fs = require('fs');
let mkdirp = require('mkdirp');

let createUser = function (req, res) {
    let nombre = req.body.nombre;
    let apellido= req.body.apellido;
    let nickname = req.body.nickname;
    let pass = req.body.pass;
    let correo = req.body.correo;
    let extencion = req.file.originalname.split(".")[req.file.originalname.split(".").length -1];
    console.log(nombre);
    console.log(apellido);
    console.log(nickname);
    console.log(pass);
    console.log(correo);
    let targetPath = '../ServerDB/Users/'+nickname+"."+correo+'/' + nickname+"_"+correo+"_ProfilePic" +"."+extencion;


    mkdirp('../ServerDB/Users/'+nickname+"."+correo+'/', function(err) {

        if(!err){
            fs.rename(req.file.path, targetPath, function(err) {
                if (err) {

                    throw err;
                }


            });
        }

    });



    res.end()
/*
    DB.create(nombre, nickname, pass, correo, function(err, result) {

            if (err) {
                res.status(500).json(err);
                console.log(err);
            }else {
                res.status(200).json(result);
            }
        });
*/
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
