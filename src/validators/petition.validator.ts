import { Router, Request, Response } from 'express'
import { check, validationResult } from 'express-validator/check'
import { matchedData, sanitize } from 'express-validator/filter'
import * as bcrypt from 'bcrypt'
import { Petition } from '../models'

export class PetitionValidator {
  public static create = [
    check('subject')
      .exists()
      .isLength({ min: 4 }),
    check('description')
      .exists()
      .isLength({ min: 6 }),
    check('video_url')
      .exists()
      .isLength({ min: 10 }),
    check('city')
      .exists()
      .isLength({ min: 2 }),
    check('state')
      .exists()
      .isLength({ min: 2 }),
    check('country')
      .exists()
      .isLength({ min: 2 })
  ]
}