import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
} from "sequelize-typescript";
@Table({
  tableName: "users",
})
export class User extends Model<User> {
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
