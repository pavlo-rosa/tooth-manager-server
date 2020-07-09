// import { User } from "../models/user";
import { Request, Response, Router } from "express";
import { sequelize } from "../models/index";
const router = Router();
import { db } from "../models";

router.get("/", async function (req: Request, res: Response) {
  // Users().findByPk(26)
  let result = await db.user.findAll();
  res.json(result);
});

export = router;
