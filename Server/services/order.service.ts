import {NextFunction, Response} from "express";
import { CatchAsyncError } from "../middleware/catchAsyncError";
import orderModel from "../models/orderModel";

// create new order
export const newOrder = CatchAsyncError(async(data:any,next:NextFunction, res:Response) => {
    const order = await orderModel.create(data);
    res.status(201).json({
        success: true,
        order,
    });
});

// Get All orders
export const getAllOrdersService = async(res:Response) => {
    const orders = await orderModel.find().sort({ createdAt: -1 });
    res.status(201).json({
        success: true,
        orders,
    });
}
