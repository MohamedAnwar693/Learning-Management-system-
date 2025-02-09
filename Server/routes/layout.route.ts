import express from "express";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import { createLayout, getLayoutByType, updateLayout } from "../controllers/layout.controller";
import { updateAccessToken } from "../controllers/user.controllers";

const layoutRouter = express.Router();

layoutRouter.post(
  "/create-layout",
  updateAccessToken,
  isAuthenticated,
  authorizeRoles("admin"),
  createLayout
);

layoutRouter.put(
  "/edit-layout",
  updateAccessToken,
  isAuthenticated,
  authorizeRoles("admin"),
  updateLayout
);

layoutRouter.get(
  "/get-layout/:type",
  getLayoutByType
);

export default layoutRouter;
