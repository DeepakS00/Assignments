import { Router } from "express";
import multer from "multer";
import { uploadFiles } from "../controller/upload-controller";

const upload = multer().single("image");

export const router: Router = Router();

router.post("/", upload, uploadFiles);
