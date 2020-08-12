import { Request, Response, Router } from "express";
import routesPacient from "./pacient";
// const router = Router();
//
// router.get("/", function (req: Request, res: Response) {
//   res.json({})
// });

export class Routes {
  public static router = Router();

  public static init(): Router {
    // Declare main routes.
    this.router.use("/pacient/", routesPacient);
    // this.router.use('/area/language/:language', new AreaLanguageRoutes().router);
    // this.router.use('/tag', new TagRoutes().router);

    return this.router;
  }
}
