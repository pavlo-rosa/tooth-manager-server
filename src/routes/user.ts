// import { User } from "../models/user";
import { Request, Response, Router } from "express";
import { sequelize } from "../models/index";
const router = Router();
import { User } from "../models/user";

router.get("/", function (req: Request, res: Response) {
  // User.findAll({
  //   where: {
  //     firstName: "John",
  //   },
  // }).then((i) => {
  //   res.json(i);
  // });

  async function stuff() {
    // const newUser = await User.create({
    //   name: 'Johnny',
    //   preferredName: 'John',
    // });
    // console.log(newUser.id, newUser.name, newUser.preferredName);
    //
    // const project = await newUser.createProject({
    //   name: 'first!',
    // });
    // const ourUser = await User.findByPk(1, {
    //   include: [User.associations.projects],
    //   rejectOnEmpty: true, // Specifying true here removes `null` from the return type!
    // });
    // console.log(ourUser.projects![0].name); // Note the `!` null assertion since TS can't know if we included
    // the model or not
  }
  // stuff()
  res.json({})
});

export = router;
