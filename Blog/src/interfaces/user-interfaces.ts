import { Model } from "sequelize";


export interface IUserAttributes extends Model{ 
    id?: number;
    full_name: string;
    email: string;
    password: string;
}

export interface IUserLogin {
    email: string;
    password: string;
}
