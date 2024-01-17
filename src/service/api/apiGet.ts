import axios, { AxiosResponse } from 'axios';

export interface Post {
    id?: number;
    title?: string;
    summary?: string;
    article?: string;
    createDate?: string;
}

export async function fetchPosts(): Promise<Post[]> {
    try {
        const response: AxiosResponse<Post[]> = await axios.get('http://localhost:3000/posts');
        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}