
class Token {

    constructor() {

    }

    get () {

    };

    create () {

    };

    update () {

    };

    // Проверка токена
    check (req, res, next) {
        if(req.session.user) {
            next();
            return true;
        }
        //res.redirect('/auth');
    };

}



module.exports = Token;