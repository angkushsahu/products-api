import { Request, Response, NextFunction } from "express";
import { ErrorHandler } from "../utils";

function invalidUrl(req: Request, res: Response) {
    res.status(404).json({ success: false, message: "Please enter a valid api url" });
}

function errors(err: any, req: Request, res: Response, next: NextFunction) {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    if (err.code === 413) {
        const message = `Data size too large to be accepted`;
        err = new ErrorHandler(message, 400);
    }

    res.status(err.statusCode).json({ success: false, message: err.message });
}

export default { errors, invalidUrl };
