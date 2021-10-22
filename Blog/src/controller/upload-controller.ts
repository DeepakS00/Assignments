import { Request, Response } from "express";
import { uploadFile } from "../services/upload-services";

export const uploadFiles = async (req: Request, res: Response) => {
  try {
    const file = req.file;
    console.log(file);
    await uploadFile(file);
    res.send("done");
  } catch (err) {
    res.json({ message: `${err}`});
  }
};