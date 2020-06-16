// var models  = require('../models');
// import {express} from 'express';
import {User} from "../models/user";
import {Request, Response,Router} from 'express';

var router  = Router();

router.get('/', function(req: Request, res: Response) {
   User.findAll({
        where: {
            firstName: 'John'
        }
    }).then(i =>{res.json(i)});
});

export = router;
// export {router, ...};
