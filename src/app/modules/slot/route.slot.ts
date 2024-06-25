import express from "express";
import requestDataValidation from "../../middleware/requestDataValidation";
import { zodSlotValidationSchema } from "./validation.slot";
import { slotController } from "./controller.slot";
import { auth } from "../../middleware/authVerify";
import { UserRole } from "../../utils/constant";
const route = express.Router();

route.post(
  "/",
  auth(UserRole.admin),
  requestDataValidation(zodSlotValidationSchema),
  slotController.createSlot
);
route.get("/availability", slotController.getAllSlots);

export const slotRoutes = route;
