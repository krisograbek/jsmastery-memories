import axios from 'axios';

const postsURL = 'http://localhost:5000/posts';
const usersURL = 'http://localhost:5000/users';

export const fetchPosts = () => axios.get(postsURL);
export const createPost = (newPost) => axios.post(postsURL, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${postsURL}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${postsURL}/${id}`);
export const incrementLikes = (id) => axios.patch(`${postsURL}/${id}/likePost`) // we have to add /likePost to diffentiate from update above

// users
export const signup = (formData) => axios.post(`${usersURL}/signup`, formData);
export const signin = (formData) => axios.post(`${usersURL}/signin`, formData);
