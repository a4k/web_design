const express = require('express');
const router = express.Router();
const Token = require('./Token');

const token = new Token();


// Авторизация
signIn = (req, res) => {

    if(!req.body) return res.sendStatus(400);


    var user = {
        login: req.body.login,
        password: req.body.password,
    };


    var token = '45555';
    var isLogged = true;


    if(isLogged) {

        res.status(200).send({
            status: true,
            token: token,
        });
    } else {
        res.status(401).send({
            status: false,
            message: 'Invalid authorization data',
        })
    }

};



//router.post('/auth', token.checkToken(), signIn);
router.post('/auth', signIn);


module.exports = router;