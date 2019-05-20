import { Request, Response } from 'express'
import { check, validationResult } from 'express-validator/check'
import { matchedData, sanitize } from 'express-validator/filter'
import * as bcrypt from 'bcrypt'
import AuthController from './auth.controller'
import { User } from '../models'
/*
* Controller to handle request to /users
*/
export class SiteController {
  static async signup (req: Request, res: Response) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.mapped() })
    }
    const formData = matchedData(req)
    try {
      formData.password = await bcrypt.hash(formData.password, 10)
      const result = await User.createUser(formData)
      delete formData['password']
      formData['id'] = result['id']
      return res.status(200).json({ success: true, data: formData })
    } catch (err) {
      return res.status(500).json(err)
    }
  }

  static async login (req: Request, res: Response) {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.mapped() })
      }
      // const postData = matchedData(req)
      const user = req.session.user
      const result = AuthController.doLogin(user)
      return res.status(200).json({ success: true, data: result })
    } catch (err) {
      return res.status(500).json(err)
    }
  }

  static async profile (req: Request, res: Response) {
    try {
      const user = req.session.user
      const userData = await User.findUserById(user.id)
      return res.status(200).json({ success: true, data: userData })
    } catch (err) {
      return res.status(500).json(err)
    }
  }
}
