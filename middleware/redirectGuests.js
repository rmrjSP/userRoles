module.exports = function(req,res,next){
    if(!req.user){
        res.redirect('/logout');
        return;
    }

    next();
}