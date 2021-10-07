"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const post_validation_1 = require("../helper/post-validation");
const post_controller_1 = __importDefault(require("../controller/post-controller"));
exports.router = express_1.default.Router();
exports.router.route("/")
    .get((req, res, next) => {
    post_controller_1.default.getPosts()
        .then(posts => res.json(posts))
        .finally(next);
})
    .post((req, res, next) => {
    const result = (0, post_validation_1.postSchema)(req.body);
    if (result.error) {
        res.send(`Error: ${result.error.details[0].message}`);
    }
    else {
        post_controller_1.default.createPost(req.body.name, req.body.content)
            .then(() => res.send(`The post is created successfully`))
            .finally(next);
    }
});
exports.router.route("/:id")
    .put((req, res, next) => {
    const input = Object.assign({ id: req.params.id }, req.body);
    const result = (0, post_validation_1.postSchema)(input);
    if (result.error) {
        res.send(`Error: ${result.error.details[0].message}`);
    }
    else {
        post_controller_1.default.updatePost(+req.params.id, req.body.name, req.body.content)
            .then(() => res.send(`Successfully updated the blog with id ${req.params.id}`))
            .catch((e) => res.send(`Error: ${e}`))
            .finally(next);
    }
})
    .delete((req, res, next) => {
    const result = (0, post_validation_1.postSchema)(req.params);
    if (result.error) {
        res.send(`Error: ${result.error.details[0].message}`);
    }
    else {
        post_controller_1.default.deletePost(+req.params.id)
            .then(() => res.send(`Successfully deleted the blog with id ${req.params.id}`))
            .catch((e) => res.send(`Error: ${e}`))
            .finally(next);
    }
});
