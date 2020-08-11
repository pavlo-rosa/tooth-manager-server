import { Request, Response, Router } from "express";
const router = Router();

router.get("/", async function (req: Request, res: Response) {
  // const result = await Company.findAll();
  // const newCompany = await Company.findAll({ where: { id: 4 } });
  // await Company.create({cif: "jsjjjj", name: "HOLA HOLA"});

  res.json({});
});

export = router;
