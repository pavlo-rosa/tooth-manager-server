import {Sequelize, Model, DataTypes, BuildOptions} from 'sequelize';

export class User extends Model {
    public id!: number; // Note that the `null assertion` `!` is required in strict mode.
    public firstName!: string;
    public lastName!: string;
    public email!: string;
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

export default (sequelize: Sequelize) => {
    User.init({
        id: {type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true},
        firstName: {type: DataTypes.STRING},
        lastName: {type: DataTypes.STRING},
        email: {type: DataTypes.STRING},
    }, {
        tableName: 'Users',
        sequelize,
    });
    return User;
}
