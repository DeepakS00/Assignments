import { PostInstance as post } from "../models/post-model";

const getAll = () => {
    return post.findAll();
} 

const create = (name: string, content: Text) => {
    return post.create({
        author: name, 
        content: content
    });
}

const update = (id: number, content: any, author: string) => {
    return post.update({
        author: author,
        content: content,
    },{ where: { id: id } });
}

const deleteBlog = (id: number) => {
    return post.destroy({
        where: { id: id }
    });
}

export default {
    getAll,
    create,
    update,
    deleteBlog,
};
