var users_1 = require('./users');
var api_config_1 = require('./api-config');
var jwt = require('jsonwebtoken'); //token
exports.handleAuthentication = function (req, resp) {
    var user = req.body;
    if (isValid(user)) {
        var dbUser = users_1.users[user.email];
        var token = jwt.sign({ sub: dbUser.email, iss: 'meat-api' }, api_config_1.apiConfig.secret); //assinaturas para gerar o token, password
        resp.json({ name: dbUser.name, email: dbUser.email, accessToke: token }); //body com resposta do login
    }
    else {
        resp.status(403).json({ message: 'Dados inválidos.' });
    }
};
function isValid(user) {
    if (!user) {
        return false;
    }
    var dbUser = users_1.users[user.email];
    return dbUser !== undefined && dbUser.matches(user);
}
