import services from "./services/post-services";
import { Request, Response } from "express";
import message from "../constants/message";

const getPosts = async(_req: Request, res: Response) => {
    try {
        const result = await services.getAll();
        res.send(result);
    }
    catch(e) {
        res.send(`${e}`);
    }
};

const createPost = async(req: Request, res: Response) => {
    try {
        await services.create(req.body.name, req.body.content);
        res.send(message.createPost);
    }
    catch(e) {
        res.send(`${e}`);
    }
};

const updatePost = async(req: Request, res: Response) => {
    try {
        const { name, content } = req.body;
        await services.update(+req.params.id, name, content);
        res.send(message.updatePost)
    }
    catch(e) {
        res.send(`${e}`);
    }
};

const deletePost = async(req: Request, res: Response) => {
    try {
        await services.deleteBlog(+req.params.id);
        res.send(message.deletePost);
    }
    catch(e) {
        res.send(`${e}`);
    }
};

export default {
    getPosts,
    createPost,
    updatePost,
    deletePost,
};
