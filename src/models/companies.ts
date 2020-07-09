import { Sequelize, DataTypes, Model, BuildOptions } from "sequelize";

export interface ICompaniesAttributes {
  id: number;
  cif: string;
  name: string;
  created_at: Date;
  updated_at: Date;
}
export interface ICompaniesModel extends ICompaniesAttributes, Model {}
export type ICompaniesModelStatic = typeof Model & {
  new (values?: any, options?: BuildOptions): ICompaniesModel;
};
export function CompanyFactory(seq: Sequelize): ICompaniesModelStatic {
  const attributes = {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id",
      autoIncrement: true,
    },
    cif: {
      type: DataTypes.CHAR(128),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "cif",
      autoIncrement: false,
    },
    name: {
      type: DataTypes.CHAR(255),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "name",
      autoIncrement: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn("now"),
      comment: null,
      primaryKey: false,
      field: "created_at",
      autoIncrement: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn("now"),
      comment: null,
      primaryKey: false,
      field: "updated_at",
      autoIncrement: false,
    },
  };
  const options = {
    tableName: "companies",
    comment: "",
    indexes: [],
  };

  return <ICompaniesModelStatic>(
    seq.define("company", attributes, options)
  );
}
