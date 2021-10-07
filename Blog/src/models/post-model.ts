import {DataTypes, Model} from "sequelize";
import {sequelizeConnection as db} from "../utils/config";

interface IBlogAttributes {
    id?: number;
    author: string;
    content: Text;
}

export class PostInstance extends Model<IBlogAttributes> {}

PostInstance.init (
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },
    {
        sequelize: db,
        tableName: "posts",
    }
);