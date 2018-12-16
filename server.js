const express = require('express');
const app = express();
var config = require('./config/config');


app.use(express.json());

// load controllers
app.use('/', require('./app/router'));
app.use('/api', require('./app/users/router'));


// errors handler
app.use(require('./app/errors/not-found'));



app.listen(config.site.port, (error) => {
    if(error) {

    }
    console.log('Server listen on 8081');
});