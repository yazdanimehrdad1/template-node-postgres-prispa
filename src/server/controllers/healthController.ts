import {Request, Response} from 'express'

export const healthController = (_:Request,res:Response)=>{
    res.status(200).json({"msg": "Health routes is running"});
}