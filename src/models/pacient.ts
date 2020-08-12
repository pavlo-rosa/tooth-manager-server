import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
} from "sequelize-typescript";
@Table({
  tableName: "pacients",
})
export class Pacient extends Model<Pacient> {
  @Column
  name: string;

  @Column
  surname: string;

  @Column
  email: string;

  @Column
  birthday: Date;

  @Column
  phone1: string;

  @Column
  phone2: string;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;
}
