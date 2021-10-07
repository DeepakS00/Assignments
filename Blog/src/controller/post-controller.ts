import { PostInstance as post } from "../models/post-model";

// Get all the blog posts
async function getAllPosts(): Promise<any[]> {
    return await post.findAll();
}

async function createPost(name: string, content: Text): Promise<void> {
    await post.create({
        author: name,
        content: content,
    });
}

async function updatePost(id: number, name: string, content: Text): Promise<void> {
    await post.update(
        {
            author: name,
            content: content
        },
        {
            where: {
                id: id
            }
        })
}

async function deletePost(id: number): Promise<void> {
    await post.destroy(
        {
            where: {
                id: id
            }
        })
}

export default {
    getPosts: getAllPosts,
    createPost: createPost,
    updatePost: updatePost,
    deletePost: deletePost
};