const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const User = require('../models/users.models')



module.exports = function (passport) {
    const options = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET
    }
   
    passport.use(new JwtStrategy(options, (jwtPayload, done) => {
      
        console.log(jwtPayload)
        console.log(options)
        User.findByPk(jwtPayload.id)
        .then(user=>{
            console.log(user)
            if(user){
                // console.log(user)
                return done(null, user)
            } else{
                return done(null, false)
            }
        }).catch(err=>done(err, false))
    }))
}