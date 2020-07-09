import { Model, BuildOptions } from 'sequelize';
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
