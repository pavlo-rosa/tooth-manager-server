import { Request, Response, Router } from "express";
import { User } from "../models/users";

const router = Router();

router.get("/", async function (req: Request, res: Response) {
  try {
    res.json(await User.findAll());
  } catch (e) {
    res.send(e);
  }
});

router.get("/:id", async function (req: Request, res: Response) {
  try {
    const pacientId: string = req.params.id;
    res.json(await User.findByPk(pacientId));
  } catch (e) {
    res.send(e);
  }
});

export = router;
