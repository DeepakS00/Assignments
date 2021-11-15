import services from "../services/post-services";
import { Request, Response } from "express";
import message from "../constants/message";

const getPosts = async(_req: Request, res: Response) => {
    try {
        const result = await services.getAll();
        res.send(result);
    }
    catch(err) {
        res.json({ message: `${err}`});
    }
};

const getById = async(req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id)
        const result = await services.getById(id);
        if (result === null) throw new Error(message.notFound);
        res.json({ 
            message: `Hey ${result.getDataValue("author")} here is your blog.`,
            Blog: result,
        });
    } catch(err) {
        res.json({ message: `${err}`});
    }
}; 

const createPost = async(req: Request, res: Response) => {
    try {
        const { name, content } = (req.body as { name: string, content: Text });
        const result = await services.create(name, content);
        res.json({ message: message.createPost, newBlog: result });
    }
    catch(err) {
        res.json({ message: `${err}`});
    }
};

const updatePost = async(req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id)
        const { name, content } = (req.body as { name: string, content: Text });
        const check = await services.getById(id);
        if (check === null) throw new Error(message.notFound);
        await services.update(id, name, content);
        res.json({ message: message.updatePost, updated: await services.getById(id) })
    }
    catch(err) {
        res.json({ message: `${err}`});
    }
};

const deletePost = async(req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id)
        await services.deleteBlog(id);
        res.json({ message: `message.deletePost` });
    }
    catch(err) {
        res.json({ message: `${err}`});
    }
};

export default {
    getPosts,
    createPost,
    updatePost,
    deletePost,
    getById,
};
