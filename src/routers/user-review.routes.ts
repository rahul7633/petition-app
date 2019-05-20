import { Router, Request, Response } from 'express'
import { check, validationResult } from 'express-validator/check'
import { matchedData, sanitize } from 'express-validator/filter'
import { Auth, Paginator } from '../middlewares'

const router: Router = Router()

/* eslint-disable */
/**
 * @swagger
 * /users/{user_id}/reviews:
 *   post:
 *     tags:
 *       - User review
 *     description: Post a review against a user
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
 *       - name: user_id
 *         description: User-id for whom submit review.
 *         in: path
 *         required: true
 *         type: number
 *       - name: rating
 *         description: User rating to submit. Choose 1-5.
 *         in: formData
 *         required: true
 *         type: number
 *       - name: comments
 *         description: Comments to submit with rating.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Return success flag, and data
 */
/* eslint-enable */

/* eslint-disable */
/**
 * @swagger
 * /users/{user_id}/reviews:
 *   get:
 *     tags:
 *       - User review
 *     description: Fetch all reviews against a user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Authorization
 *         description: JWT token
 *         in: header
 *         required: true
 *         type: string
 *         default: Bearer {token}
 *       - name: user_id
 *         description: User-id to find reviews.
 *         in: path
 *         required: true
 *         type: number
 *     responses:
 *       200:
 *         description: Return success flag, and data
 */
/* eslint-enable */
