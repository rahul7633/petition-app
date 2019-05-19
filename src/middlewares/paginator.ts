import { Request, Response } from 'express'

export class Paginator {
  static initialise (req: Request, res: Response, next) {
    let pageno = req.query.pageno
    if (Number.isNaN(pageno) || !pageno) {
      pageno = 1
    } else {
      pageno = Number(pageno)
    }

    let limit = req.query.limit
    if (Number.isNaN(limit) || !limit) {
      limit = 20
    } else {
      limit = Number(limit)
    }

    const skip = (pageno - 1) * limit
    req.session.paginator = { limit, skip }
    next()
  }
}
