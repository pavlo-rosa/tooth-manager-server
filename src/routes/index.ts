// import { User } from "../models/user";
import { Request, Response, Router } from "express";
import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import { HasManyGetAssociationsMixin, HasManyAddAssociationMixin, HasManyHasAssociationMixin, Association, HasManyCountAssociationsMixin, HasManyCreateAssociationMixin } from 'sequelize';
import {sequelize} from '../models/index'
const router = Router();

router.get("/", function (req: Request, res: Response) {
  // User.findAll({
  //   where: {
  //     firstName: "John",
  //   },
  // }).then((i) => {
  //   res.json(i);
  // });

  class User extends Model {
    public id!: number; // Note that the `null assertion` `!` is required in strict mode.
    public name!: string;
    public preferredName!: string | null; // for nullable fields

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    // Since TS cannot determine model association at compile time
    // we have to declare them here purely virtually
    // these will not exist until `Model.init` was called.

    public getProjects!: HasManyGetAssociationsMixin<Project>; // Note the null assertions!
    public addProject!: HasManyAddAssociationMixin<Project, number>;
    public hasProject!: HasManyHasAssociationMixin<Project, number>;
    public countProjects!: HasManyCountAssociationsMixin;
    public createProject!: HasManyCreateAssociationMixin<Project>;

    // You can also pre-declare possible inclusions, these will only be populated if you
    // actively include a relation.
    public readonly projects?: Project[]; // Note this is optional since it's only populated when explicitly requested in code

    public static associations: {
      projects: Association<User, Project>;
    };
  }


  class Project extends Model {
    public id!: number;
    public ownerId!: number;
    public name!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
  }

  class Address extends Model {
    public userId!: number;
    public address!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
  }

  Project.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    }
  }, {
    sequelize,
    tableName: 'projects',
  });

  User.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    preferredName: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    }
  }, {
    tableName: 'users',
    sequelize: sequelize, // passing the `sequelize` instance is required
  });

  Address.init({
    userId: {
      type: DataTypes.INTEGER,
    },
    address: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    }
  }, {
    tableName: 'address',
    sequelize: sequelize, // passing the `sequelize` instance is required
  });

// Here we associate which actually populates out pre-declared `association` static and other methods.
  User.hasMany(Project, {
    sourceKey: 'id',
    foreignKey: 'ownerId',
    as: 'projects' // this determines the name in `associations`!
  });

  Address.belongsTo(User, {targetKey: 'id'});
  User.hasOne(Address,{sourceKey: 'id'});

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
    const ourUser = await User.findByPk(1, {
      include: [User.associations.projects],
      rejectOnEmpty: true, // Specifying true here removes `null` from the return type!
    });
    console.log(ourUser.projects![0].name); // Note the `!` null assertion since TS can't know if we included
                                            // the model or not
  }
  stuff()
  res.json({})
});

export = router;
