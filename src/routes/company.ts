// import { User } from "../models/user";
import { Request, Response, Router } from "express";
import { sequelize } from "../models/index";
const router = Router();
import { Company } from "../models";

router.get("/", async function (req: Request, res: Response) {
  const result = await Company.findAll();
  const newCompany = await Company.findAll({ where: { id: 4 } });
  await Company.create({cif: "jsjjjj", name: "HOLA HOLA"});

  res.json(newCompany);
});

export = router;
