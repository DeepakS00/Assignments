import schema from "../helper/schemas/post-schema";
import { RequestHandler } from "express";

// put an underscore for unused parameters like res in these cases.

const postValidation: RequestHandler = async(req, _res, next) => {
    try {
        const {name, content} = req.body;
        const { error } = await schema.postSchema({ name, content });
        if (error) throw new Error(error.details[0].message);
        next();
    } catch(err) {
        next(`${err}`);
    }
};

const updateValidation: RequestHandler = async(req, _res, next) => {
    try {
        const id = parseInt(req.params.id);
        const {name, content} = req.body;
        const { error } = await schema.updateSchema({ id, name, content });
        if (error) throw new Error(error.details[0].message);
        next();
    } catch(err) {
        next(`${err}`);
    }
};

const deleteValidation: RequestHandler = async(req, _res, next) => {
    try {
        const id = parseInt(req.params.id);
        const { error } = await schema.deleteSchema(id);
        if (error) throw new Error(error.details[0].message);
        next();
    } catch(err) {
        next(`${err}`);
    }
};

export default {
    postValidation,
    updateValidation,
    deleteValidation,
};
