import { Request, Response } from "express";
import { getDetails, forTable1 } from "../services/findDetails";
import { table1, table2, table3 } from "../sample";

const forModelType = async (_req: Request, res: Response) => {
  try {
    const data = await getDetails("aircraftModelTypes/", table2);
    res.json(data);
  } catch (err) {
    res.send(`${err}`);
  }
};

const forAircraftTails = async (_req: Request, res: Response) => {
  try {
    const data = await getDetails("aircraftTails/", table3);
    res.json(data);
  } catch (err) {
    res.send(`${err}`);
  }
};

const forAircraftSizeClass = async (_req: Request, res: Response) => {
  try {
    const data = await forTable1("aircraftSizeClass/", table1);
    res.json(data);
  } catch (err) {
    res.send(`${err}`);
  }
};

export default {
  forModelType,
  forAircraftTails,
  forAircraftSizeClass,
};
