'use strict'

const User = require('../models/user');
const bcrypt = require('bcrypt-nodejs');

function saveUser(req, res) {
    let user = new User();
    let params = req.body;

    user.name = params.name;
    user.surename = params.surename;
    user.email = params.email;
    user.role = 'ROLE_USER';
    user.image = 'null';

    if (params.name != null && params.surename != null && params.password != null &&
        params.email != null) {

        bcrypt.hash(params.password, null, null, (err, hash) => {
            user.password = hash;
        });

        user.save((err, userStored) => {
            if (!userStored) {
                res.status(500).send({ message: 'error' });
            } else {
                res.status(200).send({ message: 'ok', userStored });
            }
        })
    } else {
        res.status(200).send({ message: 'rellena todos los campos' });
    }
}

function login(req, res) {

    let params = req.body;
    let email = params.email.toLowerCase();
    let password = params.password;

    User.findOne({ email: email }, (err, usu) => {
        if (err) {
            res.status(500).send({ message: 'Error en la petición' });
        } else {
            if (!res) {
                res.status(400).send({ message: 'El usuario no existe' });
            } else {
                bcrypt.compare(password, usu.password, (err, check) => {
                    if (check) {
                        //devolver datos del usuario logueado
                        if (params.gethash) {

                        } else {
                            res.status(200).send({
                                message: 'success',
                                usu
                            });
                        }
                    } else {
                        res.status(404).send({ message: 'El usuario no ha podido loguearse' });
                    }
                });
            }
        }
    })
}


module.exports = {
    saveUser,
    login
};