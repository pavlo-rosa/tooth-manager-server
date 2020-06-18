import { Model, DataTypes, Sequelize } from "sequelize";
import { sequelize } from "./index";

export class User extends Model {
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public name!: string;
  public surname!: string;
  public email!: string;
  public birthday!: string | null; // for nullable fields
  public phone1!: string | null;
  public phone2!: string | null; // for nullable fields

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static associations: {
    // projects: Association<User, Project>;
  };
}
export default (sequelize: Sequelize): any => {
  User.init(
    {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: null,
      },
      name: {
        type: DataTypes.STRING(128),
        allowNull: false,
      },
      surname: {
        type: DataTypes.STRING(128),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(64),
        allowNull: false,
      },
      birthday: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      phone1: {
        type: DataTypes.STRING(64),
        allowNull: true,
      },
      phone2: {
        type: DataTypes.STRING(64),
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("now"),
        field: "created_at",
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("now"),
        field: "updated_at",
      },
    },
    {
      tableName: "users",
      sequelize: sequelize, // passing the `sequelize` instance is required
    }
  );
  return User
};

// export = router;
