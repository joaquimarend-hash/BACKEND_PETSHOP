import type { NextFunction, Request, Response } from "express";

export const adminMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const isAdmin = req.userRole === "ADMIN"
    console.log(req.userRole)
    if (isAdmin){
        next()
    }
    else{
        res.status(403).send("usuario nao tem permissao")
        console.log("usuario n tem permissao")
    }
}
