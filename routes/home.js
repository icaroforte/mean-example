module.exports = (app) => {
    let controller = app.controllers.home;
    app.get('/index', controller.index);
    app.get('/', controller.index);
    app.post('/login', controller.login);
    app.get('/logout', controller.logout);
}
