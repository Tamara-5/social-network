import axios  from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const FetchPosts = () => API.get('/posts')
export const GetUserById = (id) => API.get(`/users/get-user-by-id/${id}`)
export const Delete = (id) => API.get(`/posts/${id}`)