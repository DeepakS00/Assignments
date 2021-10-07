"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const post_model_1 = require("../models/post-model");
// Get all the blog posts
function getAllPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield post_model_1.PostInstance.findAll();
    });
}
function createPost(name, content) {
    return __awaiter(this, void 0, void 0, function* () {
        yield post_model_1.PostInstance.create({
            author: name,
            content: content,
        });
    });
}
function updatePost(id, name, content) {
    return __awaiter(this, void 0, void 0, function* () {
        yield post_model_1.PostInstance.update({
            author: name,
            content: content
        }, {
            where: {
                id: id
            }
        });
    });
}
function deletePost(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield post_model_1.PostInstance.destroy({
            where: {
                id: id
            }
        });
    });
}
exports.default = {
    getPosts: getAllPosts,
    createPost: createPost,
    updatePost: updatePost,
    deletePost: deletePost
};
