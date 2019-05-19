import * as jwt from 'jwt-simple'
import * as passport from 'passport'
import * as moment from 'moment'
import { Strategy, ExtractJwt } from 'passport-jwt'
import { User } from '../models'

class Auth {
  public initialize = () => {
    passport.use('jwt', this.getStrategy())
    return passport.initialize()
  }

  public authenticate = (callback) => passport.authenticate('jwt', { session: false, failWithError: true }, callback)

  public doLogin = (user) => this.genToken(user)

  private genToken = (user): Object => {
    const expires = moment().utc().add({ minutes: 30 }).unix()
    const token = jwt.encode({
      exp: expires,
      user: user.id
    }, process.env.JWT_SECRET)

    return {
      token: `JWT ${token}`,
      expires: moment.unix(expires).utc(),
      user: user.id
    }
  }

  private getStrategy = (): Strategy => {
    const params = {
      secretOrKey: process.env.JWT_SECRET,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      passReqToCallback: true
    }

    return new Strategy(params, (req, payload: any, done) => {
      User.findUserById(payload.user)
        .then((user) => {
          /* istanbul ignore next: passport response */
          if (user === null) {
            return done(null, false, { message: 'The user in the token was not found' })
          }

          return done(null, { id: user.id, role: user.role })
        })
        .catch((err) => done(err))
    })
  }
}

export default new Auth()
