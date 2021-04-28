const Utils = require('../config/initialParse');
const Parse = Utils.initializeParse();


const loginView = (req,res) => res.render('login')
const login = async(req,res) => {
    try {
        const {email,password} = req.body;
        const user = await Parse.User.logIn(email, password);
        req.session.user = user;
        res.status(200).send('Bienvenido');
    }catch (err) {
        res.status(500).send(err);
    }
}

const changePassword = (req,res) => {
    res.render('changePassword')
}

const logout = async(req,res) => {
    await Parse.User.logOut();
    req.session.user = undefined;
    res.redirect('/')
}



module.exports = {
    login,
    loginView,
    changePassword,
    logout
}