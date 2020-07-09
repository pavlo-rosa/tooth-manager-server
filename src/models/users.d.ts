import { Model, BuildOptions } from 'sequelize';
export interface IUsersAttributes {
  id: number,
  name: string,
  surname: string,
  email: string,
  birthday?: Date,
  phone1?: string,
  phone2?: string,
  created_at: Date,
  updated_at: Date,
}
export interface IUsersModel extends IUsersAttributes, Model {}
export type IUsersModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IUsersModel;
};