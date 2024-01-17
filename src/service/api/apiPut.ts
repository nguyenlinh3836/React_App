import axios, { AxiosResponse } from 'axios';
import {Post} from "./apiGet";

export async function putPosts(payload: Post, id:number): Promise<Post[]> {
    try {
        const response: AxiosResponse<Post[]> = await axios.put(`http://localhost:3000/posts/${id}`, payload);
        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}