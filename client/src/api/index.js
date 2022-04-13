import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/' })

export const fetchPosts = () => API.get('posts');
export const createPost = (newPost) => API.post('posts', newPost);
export const updatePost = (id, updatedPost) => API.patch(`posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`posts/${id}`);
export const incrementLikes = (id) => API.patch(`posts/${id}/likePost`) // we have to add /likePost to diffentiate from update above

// users
export const signup = (formData) => API.post(`users/signup`, formData);
export const signin = (formData) => API.post(`users/signin`, formData);
