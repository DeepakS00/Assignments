"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const postSchema = (posts) => {
    const schema = joi_1.default.object().keys({
        id: joi_1.default.number().integer().min(1),
        name: joi_1.default.string().min(2),
        content: joi_1.default.string().min(5)
    });
    return schema.validate(posts);
};
exports.postSchema = postSchema;
