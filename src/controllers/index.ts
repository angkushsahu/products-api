import { Request, Response, NextFunction } from "express";
import { catchAsyncErrors } from "../middlewares";
import { ApiFeatures, ErrorHandler } from "../utils";
import { allProducts } from "../data/allProducts";

export const getAllProducts = catchAsyncErrors(async (req: Request, res: Response, next: NextFunction) => {
    const resultPerPage = 10;

    const apiFeatures = new ApiFeatures(allProducts, req.query).searchProducts().filterProducts();
    const numberOfProducts = apiFeatures.query.length;
    if (!numberOfProducts) {
        return next(new ErrorHandler("Products not available", 404));
    }

    const paginatedQuery = apiFeatures.pagination(resultPerPage);
    const products = paginatedQuery.query;

    res.status(200).json({
        success: true,
        message: "Fetched all products",
        numberOfProducts,
        resultPerPage,
        products,
    });
});

export const getOneProduct = catchAsyncErrors(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const product = allProducts.filter((product) => product._id === id)[0];
    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }

    res.status(200).json({ success: true, message: "Fetched product successfully", product });
});
