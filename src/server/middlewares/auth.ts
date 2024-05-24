import jwt from "jsonwebtoken";
import  bcrypt from "bcrypt";
import {Response, NextFunction} from "express";


export const comparePassword = async (password:string, hash:string) => {
  return bcrypt.compare(password, hash)
};

export const hashPassword = async (password:string) => {
  return bcrypt.hash(password, 10)
};

export const createJWT = (user:any) => {
  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET
  );
  return token;
};

export const protect = async (req:any, res:Response, next:NextFunction) => {

  const bearer = req.headers.authorization;

  if (!bearer || !bearer.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const [,token] = bearer.split(' ');

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
    
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
    
  }
};
