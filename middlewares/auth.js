const isAuth = (req,res,next) => {
   if(req.session.user !== undefined){
        next();
   }
   res.status(500).send('Usuario no autorizado, registrate porfavor')
}   

module.exports = {
    isAuth
}