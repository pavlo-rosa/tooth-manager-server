import { Request, Response, Router } from "express";
import { Pacient } from "../models/pacient";
import LoggerService from "../config/logger";
import { Op } from "sequelize";

const logger = new LoggerService("./routes/pacient.ts");
const router = Router();

router.get("/", async function (req: Request, res: Response) {
  try {
    res.json(await Pacient.findAll());
  } catch (e) {
    res.send(e);
  }
});

router.get("/search/", async function (req: Request, res: Response) {
  try {
    const text: string = req.query.text.toString() || null;
    if (text) {
      res.json(
        await Pacient.findAll({
          where: {
            [Op.or]: {
              name: {
                [Op.iLike]: `%${text}%`,
              },
              surname: {
                [Op.iLike]: `%${text}%`,
              },
            },
          },
        })
      )
    } else {
      res.json({});
    }
  } catch (e) {
    res.send(e);
  }
});

router.get("/:id", async function (req: Request, res: Response) {
  try {
    const pacientId: string = req.params.id;
    res.json(await Pacient.findByPk(pacientId));
  } catch (e) {
    res.send(e);
  }
});

export = router;
