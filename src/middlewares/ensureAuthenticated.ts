import {Request, Response, NextFunction} from 'express'
import { verify } from 'jsonwebtoken'


interface IPayload {
  sub: string
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {

  try {
  // Get token

  // split separeting string coming authorization headears field at 'Bearer code_token
  const token = req.headers.authorization.split(" ")[1]

  // has token

  if(!token) return res.status(401).end()

  // Validate token

    const { sub } = verify(token, "172e00a03eee6f31bb9aaf498ce00a5b") as IPayload
    
    // Recovery info user by token

    req.user_id = sub 

  } catch (err) {
    return res.status(401).end()
  }




  return next()
} 