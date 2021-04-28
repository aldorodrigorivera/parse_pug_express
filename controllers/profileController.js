
const profile = (req,res) => {
    const context = {user: req.session.user};
    console.log('Context', context);
    res.render('profile',context)
}


module.exports = {
    profile
}