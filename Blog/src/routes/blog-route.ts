import express, { Router, Request, Response } from "express";
import { postSchema } from "../helper/post-validation";
import controller from "../controller/post-controller"

export const router: Router = express.Router();

router.route("/")
    .get((req: Request, res: Response, next) => {
        controller.getPosts()
            .then(posts => res.json(posts))
            .finally(next);
    })
    .post((req: Request, res: Response, next) => {
        const result = postSchema(req.body);
        if (result.error) {
            res.send(`Error: ${result.error.details[0].message}`);
        } else {
            controller.createPost(req.body.name, req.body.content)
                .then(() => res.send(`The post is created successfully`))
                .finally(next);
        }
    });

router.route("/:id")
    .put((req: Request, res: Response, next) => {
        const input = { id: req.params.id, ...req.body }
        const result = postSchema(input);
        if (result.error) {
            res.send(`Error: ${result.error.details[0].message}`);
        } else {
            controller.updatePost(+req.params.id, req.body.name, req.body.content)
            .then(() => res.send(`Successfully updated the blog with id ${req.params.id}`))
            .catch((e) => res.send(`Error: ${e}`))
            .finally(next)
        }
    })
    .delete((req: Request, res: Response, next) => {
        const result = postSchema(req.params);
        if (result.error) {
            res.send(`Error: ${result.error.details[0].message}`);
        } else {
            controller.deletePost(+req.params.id)
                .then(() => res.send(`Successfully deleted the blog with id ${req.params.id}`))
                .catch((e) => res.send(`Error: ${e}`))
                .finally(next)
        }
    })

