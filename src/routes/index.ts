import { User } from "../models/user";
import { Request, Response, Router } from "express";

const router = Router();

router.get("/", function (req: Request, res: Response) {
  User.findAll({
    where: {
      firstName: "John",
    },
  }).then((i) => {
    res.json(i);
  });
});

export = router;
