const Utils = require('../config/initialParse');
const Parse = Utils.initializeParse();

const singUp = async(req,res) => {
    const  {name,email,password} = req.body;
    const user = new Parse.User();
        user.set("username", name);
        user.set("password", password);
        user.set("email", email);
        try {
            req.session.user = await user.signUp();
            res.status(200).send('Usuario registrado correctamente');
        } catch (error) {
            console.error("Error: " + error.code + " " + error.message);
            res.status(500).send(error)
        }
}

const singUpView = async(req,res) => {
    res.render('singUp')
}

module.exports = {
    singUp,
    singUpView
}