import { Request, Response } from 'express'
import AuthController from '../controllers/auth.controller'

export class Auth {
  static isLoggedin (req: Request, res: Response, next) {
    return AuthController.authenticate((err, user, info) => {
      if (err) { return next(err) }
      if (!user) {
        if (info.name === 'TokenExpiredError') {
          res.status(401).json({ message: 'Your token has expired. Please re-enter your login details.' })
        } else {
          res.status(401).json({ message: info.message })
        }
        return null
      }
      req.session.user = user
      return next()
    })(req, res, next)
  }

  static isAdminLoggedin (req: Request, res: Response, next) {
    Auth.isLoggedin(req, res, () => {
      const user = req.session.user
      if (user.role !== '1') {
        res.status(403).json({ message: 'You are not allowed to perform this section.' })
        null
      }
      return next()
    })
  }

  static isSponsorLoggedin (req: Request, res: Response, next) {
    Auth.isLoggedin(req, res, () => {
      const user = req.session.user
      if (user.role !== '4') {
        res.status(403).json({ message: 'You are not allowed to perform this section.' })
        null
      }
      return next()
    })
  }

  static isSignerLoggedin (req: Request, res: Response, next) {
    Auth.isLoggedin(req, res, () => {
      const user = req.session.user
      if (user.role !== '2') {
        res.status(403).json({ message: 'You are not allowed to perform this section.' })
        null
      }
      return next()
    })
  }
  
  static isCirculatorLoggedin (req: Request, res: Response, next) {
    Auth.isLoggedin(req, res, () => {
      const user = req.session.user
      if (user.role !== '3') {
        res.status(403).json({ message: 'You are not allowed to perform this section.' })
        null
      }
      return next()
    })
  }
}
