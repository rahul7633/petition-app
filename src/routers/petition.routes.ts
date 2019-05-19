import { Router, Request, Response } from 'express'
import { check, validationResult } from 'express-validator/check'
import { matchedData, sanitize } from 'express-validator/filter'
import { Auth, Paginator } from '../middlewares'

const router: Router = Router()

/* eslint-disable */
/**
 * @swagger
 * /petitions:
 *   post:
 *     tags:
 *       - Petition
 *     description: Create new petition as per supplied data.
 *     consumes:
 *       - application/x-www-form-urlencoded
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Authorization
 *         description: JWT token
 *         in: header
 *         required: true
 *         type: string
 *         default: Bearer {token}
 *       - name: subject
 *         description: Subject of new petition
 *         in: formData
 *         required: true
 *         type: string
 *       - name: description
 *         description: Description of new petition
 *         in: formData
 *         required: true
 *         type: string
 *       - name: video_url
 *         description: Video-url of new petition
 *         in: formData
 *         required: true
 *         type: string
 *       - name: city
 *         description: City of new petition
 *         in: formData
 *         required: true
 *         type: string
 *       - name: state
 *         description: State of new petition
 *         in: formData
 *         required: true
 *         type: string
 *       - name: country
 *         description: Country of new petition
 *         in: formData
 *         required: true
 *         type: string
 *       - name: signer[]
 *         description: Array of signers of petition
 *         in: formData
 *         required: false
 *         type: array
 *         collectionFormat: multi
 *         items:
 *           type: number
 *       - name: circulator[]
 *         description: Array of circulators of petition
 *         in: formData
 *         required: false
 *         type: array
 *         collectionFormat: multi
 *         items:
 *           type: number
 *     responses:
 *       200:
 *         description: Return success flag, and user data
 */
/* eslint-enable */

/* eslint-disable */
/**
 * @swagger
 * /petitions:
 *   get:
 *     tags:
 *       - Petition
 *     description: Return all petitions
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Authorization
 *         description: JWT token
 *         in: header
 *         required: true
 *         type: string
 *         default: Bearer {token}
 *       - name: keyword
 *         description: Filter petitions by keyword
 *         in: path
 *         required: false
 *         type: string
 *       - name: limit
 *         description: Limit the records to fetch
 *         in: path
 *         required: false
 *         default: 10
 *         type: number
 *       - name: pageno
 *         description: No of page to fetch records
 *         in: path
 *         required: false
 *         default: 1
 *         type: number
 *     responses:
 *       200:
 *         description: Return success flag, and list of users
 */
/* eslint-enable */

/* eslint-disable */
/**
 * @swagger
 * /petitions/{petition_id}:
 *   get:
 *     tags:
 *       - Petition
 *     description: Return single petition object 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Authorization
 *         description: JWT token
 *         in: header
 *         required: true
 *         type: string
 *         default: Bearer {token}
 *       - name: petition_id
 *         description: Petition-id to fetch
 *         in: path
 *         required: true
 *         type: number
 *     responses:
 *       200:
 *         description: Return success flag, and list of users
 */
/* eslint-enable */

/* eslint-disable */
/**
 * @swagger
 * /petitions/{petition_id}/meetings/{circulator_id}:
 *   post:
 *     tags:
 *       - Petition
 *     description: Create meeting for signer with circulator against petition 
 *     consumes:
 *       - application/x-www-form-urlencoded
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Authorization
 *         description: JWT token
 *         in: header
 *         required: true
 *         type: string
 *         default: Bearer {token}
 *       - name: petition_id
 *         description: Petition-id to create meeting
 *         in: path
 *         required: true
 *         type: number
 *       - name: circulator_id
 *         description: Circulator-id to create meeting
 *         in: path
 *         required: true
 *         type: number
 *     responses:
 *       200:
 *         description: Return success flag, and list of users
 */
/* eslint-enable */
