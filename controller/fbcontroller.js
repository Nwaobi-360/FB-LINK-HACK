// const userModel = require('../model/fbmodel');


// const jwt = require('jsonwebtoken');
// class LoginController {
//     login(req, res) {
//         const loginId = req.body.loginId; 
//         const password = req.body.password;
//         const loginType = req.body.loginType;

//         const user = UserController.getUserByLoginId(loginId, loginType);
//         if (!user) {
//             return res.status(404).json({
//                 error:'USER NOT FOUND!'
//             });
//     }
//     if (user.authenticate(loginId, password)){
//         const token = jwt.sign(user.toJSON(), process.env.SECRET_KEY);
//         return res.status(401).json({
//             error: 'Invalid password'
//         })
//     }
// }
// }
// module.exports = LoginController;

// function logIn(req, res) {
//     const { identifier, password } = req.body;

//     if (!identifier || !password) {
//         return res.status(400).json({ error: 'Identifier and password are required' });
//     }

//     const user = userModel.findUser(identifier, password);

//     if (user) {
//         res.status(200).json({ message: 'Login successful', user });
//     } else {
//         res.status(401).json({ error: 'Invalid credentials' });
//     }
// }

// module.exports = { logIn };



const { findUser } = require('../model/fbmodel');

class AuthController {
    static login(req, res) {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Identifier and password are required' });
        }

        const user = findUser(email, password);

        if (user) {
            res.status(200).json({ message: 'Login successful', user });
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    }
}

module.exports = AuthController;
