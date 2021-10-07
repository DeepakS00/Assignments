"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostInstance = void 0;
const sequelize_1 = require("sequelize");
const config_1 = require("../utils/config");
class PostInstance extends sequelize_1.Model {
}
exports.PostInstance = PostInstance;
PostInstance.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    author: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize: config_1.sequelizeConnection,
    tableName: "posts",
});
