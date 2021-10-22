import { Router } from "express";
import multer from "multer";
import { uploadFiles } from "../controller/upload-controller";
import controller from "../controller/project";

const upload = multer().single("image");

export const router: Router = Router();

router.post("/", upload, uploadFiles);
router.get("/ModelTypes", controller.forModelType);
router.get("/Tails", controller.forAircraftTails);
