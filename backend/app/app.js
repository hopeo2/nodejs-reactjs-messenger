const exprees = require("express");

const app = exprees();
const port = process.env.APP_PORT;

require('./middleware')(app);
require('./router')(app);

const startApp = () => {
    app.listen(port, () => {
        console.log(`running on port ${process.env.APP_PORT}`);
    });
};

module.exports = startApp;
