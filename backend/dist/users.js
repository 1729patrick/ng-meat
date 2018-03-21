var User = (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined
            && another.email === this.email
            && another.password === this.password;
    };
    return User;
})();
exports.User = User;
exports.users = {
    "patrick@flexpro.com.br": new User('patrick@flexpro.com.br', 'Patrick', '1234'),
    "fernanda@gmail.com.br": new User('fernanda@gmail.com.br', 'Fernanda', '4321')
};
