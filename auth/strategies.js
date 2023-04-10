import passport from "passport";
import { User } from '../models/index.js'
import passportJWT from "passport-jwt"   //On pouvait utiliser plein d'autres strategies (local, auth2 ....)

// import dotenv from 'dotenv'
// const tokenSecret=dotenv.config().parsed.TOKEN_SECRET

const { ExtractJwt, Strategy } = passportJWT

const jwtOptions = {
    secretOrKey: process.env.TOKEN_SECRET, 
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

const notreStrategy = new Strategy(jwtOptions, (payload, done) => {
    const user = User.findOne({ where: { id: payload.id } })
    if (user) {
        done(null, user)
    } else {
        done(null, false)
    }
})

export default notreStrategy