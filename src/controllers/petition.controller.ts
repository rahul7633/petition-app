import { Request, Response } from 'express'
import { check, validationResult } from 'express-validator/check'
import { matchedData, sanitize } from 'express-validator/filter'
import { Petition } from '../models'

/*
* Controller to handle request to /petitions
*/
export class PetitionController {
  static async create (req: Request, res: Response) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.mapped() })
    }
    const formData = matchedData(req)
    const user = req.session.user
    formData.creator_id = user.id
    formData.sponsor_id = user.id
    try {
      const result = await Petition.createNew(formData)
      formData['id'] = result['id']
      return res.status(200).json({ success: true, data: formData })
    } catch (err) {
      return res.status(500).json(err)
    }
  }
}
