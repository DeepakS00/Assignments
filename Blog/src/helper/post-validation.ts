import Joi from "joi";

export const postSchema = (posts: object) => {
    const schema = Joi.object().keys({
        id: Joi.number().integer().min(1),
        name: Joi.string().min(2),
        content: Joi.string().min(5)
    });
    return schema.validate(posts);
};