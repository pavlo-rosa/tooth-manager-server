import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
} from "sequelize-typescript";
@Table({
  tableName: "companies",
})
export class Company extends Model<Company> {
  @Column
  cif: string;

  @Column
  name: string;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;
}
