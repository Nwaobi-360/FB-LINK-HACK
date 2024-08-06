// const bcrypt = require('bcrypt');
// const bcrypt = require('bcrypt');

class User {
    constructor(phoneNumber, email, password) {
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.password = password;
    }

    // hashPassword(password) {
    //     const salt = bcrypt.genSaltSync(10);
    //     return bcrypt.hashSync(password, salt);
    // }

    authenticate(loginId, password) {
        if (loginId === this.phoneNumber || loginId === this.email) {
            return (password, this.password);
        }
        return false;
    }
}

const users = [
    new User('1234567890', 'user1@example.com', 'password1'),
    new User('0987654321', 'user2@example.com', 'password2')
];
 
function findUser(identifier, password) {
    const user = users.find(user => user.phoneNumber === identifier || user.email === identifier);
    if (user && user.authenticate(identifier, password)) {
        return user;
    }
    return null;
}

module.exports = { User, findUser };
