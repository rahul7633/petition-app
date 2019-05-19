import { Request, Response } from 'express'
import { check, validationResult } from 'express-validator/check'
import { matchedData, sanitize } from 'express-validator/filter'
import { User } from '../models'

/*
* Controller to handle request to /users
*/
export class UserController {
  static async getAllUsers (req: Request, res: Response) {
    const paginator = req.session.paginator
    const data = await User.getAllUsers({}, paginator)
    return res.status(200).json({ success: true, data })
  }

  static async deleteUser (req: Request, res: Response) {
    const userId = req.params.userid
    try {
      const result = await User.deleteUserById(userId)
      return res.status(200).json({ success: true })
    } catch (err) {
      return res.status(500).json(err)
    }
  }
}
