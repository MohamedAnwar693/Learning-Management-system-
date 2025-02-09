import { NextFunction, Request, Response } from "express";
import { CatchAsyncError } from "../middleware/catchAsyncError";
import ErrorHandler from "../utils/ErrorHandler";
import LayoutModel from "../models/layout.model";
import cloudinary from "cloudinary";
// import { findConfigFile, idText } from "typescript";

// Create Layout Only For Admin
export const createLayout = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { type } = req.body;
      const isTypeExist = await LayoutModel.findOne({type});
      if(isTypeExist){
        return next(new ErrorHandler(`${type} already exist`,400));
      }
      if (type === "Banner") {
        const { image, title, subTitle } = req.body;
        // Check if the image is a URL or file upload
        let imageUrl;
        if (image && image.startsWith("https")) {
          // If the image is a URL, directly use it
          imageUrl = image;
        } else {
          // If the image is a file, upload it to Cloudinary
          const myCloud = await cloudinary.v2.uploader.upload(image, {
            folder: "layout",
          });
          imageUrl = myCloud.secure_url; // Use the URL from Cloudinary
        }
        // Create the banner object
        const banner = {
          image: {
            url: imageUrl,
          },
          title,
          subTitle,
        };
        // Save the banner to the database
        await LayoutModel.create({ type: "Banner", banner });
      }
      if (type === "FAQ") {
        const { faq } = req.body;
        const faqItems = await Promise.all(
          faq.map(async(item:any) => {
            return {
              question: item.question,
              answer: item.answer
            };
          })
        )
        await LayoutModel.create({type:"FAQ", faq:faqItems});
      }
      if (type === "Categories") {
        const { categories } = req.body;
        const categoriesItems = await Promise.all(
          categories.map(async(item:any) => {
            return {
              title: item.title,
            };
          })
        )
        await LayoutModel.create({type:"Categories", categories:categoriesItems});
      }
      res.status(200).json({
        success: true,
        message: "Layout created successfully",
      });
    } catch (error:any) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);

// Edit layout
export const updateLayout = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { type } = req.body;
      if (type === "Banner") {
        const bannerData:any = await LayoutModel.findOne({ type: "Banner"});
        const { image, title, subTitle } = req.body;
        if(bannerData){
          await cloudinary.v2.uploader.destroy(bannerData.image.public_id);
        }
        const myCloud = await cloudinary.v2.uploader.upload(image, {
          folder:"layout",
        });
        const banner = {
          type: "Banner",
          image: {
            public_id: myCloud.public_id,
            url: myCloud.secure_url,
          },
          title,
          subTitle,
        };
        await LayoutModel.findByIdAndUpdate(bannerData.id,{banner});
      }
      if (type === "FAQ") {
        const { faq } = req.body;
        const FaqItem = await LayoutModel.findOne({type: "FAQ"});
        const faqItems = await Promise.all(
          faq.map(async(item:any) => {
            return {
              question: item.question,
              answer: item.answer
            };
          })
        )
        await LayoutModel.findByIdAndUpdate(FaqItem?._id, {type:"FAQ", faq:faqItems});
      }
      if (type === "Categories") {
        const { categories } = req.body;
        const categoriesData = await LayoutModel.findOne({type: "Categories"});
        const categoriesItems = await Promise.all(
          categories.map(async(item:any) => {
            return {
              title: item.title,
            };
          })
        )
        await LayoutModel.findByIdAndUpdate(categoriesData?._id, {type:"Categories", categories:categoriesItems});
      }
      res.status(200).json({
        success: true,
        message: "Layout Updated successfully",
      });
    } catch(error:any){
      return next(new ErrorHandler(error.message,500));
    }
  }
);


// Get layout by type

export const getLayoutByType = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {type} = req.params;
      const layout = await LayoutModel.findOne({type});
      res.status(201).json({
        success: true,
        layout,
      })
    } catch(error:any){
      return next(new ErrorHandler(error.message,500));
    }
  }
);


