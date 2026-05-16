import { axiosInstance } from './axios';

export type PostCategory = 'KINDNESS' | 'BOAST';

export interface Post {
  postId: number;
  member: {
    memberId: number;
    name: string;
    profileImgUrl: string;
  };
  createdAt: string;
  content: string;
  clapCount: number;
  supportCount: number;
  commentCount: number;
  isClapped: boolean;
  isSupported: boolean;
}

interface GetPostsResponse {
  success: boolean;
  code: string;
  message: string;
  data: { posts: Post[] };
}

interface CreatePostRequest {
  content: string;
  category: PostCategory;
}

interface CreatePostResponse {
  success: boolean;
  code: string;
  message: string;
  data: {
    postId: number;
    content: string;
    category: PostCategory;
    clapCount: number;
    supportCount: number;
    commentCount: number;
    createdAt: string;
    updatedAt: string;
  };
}

const MEMBER_ID = 1;

export const getPosts = (postCategory: PostCategory = 'KINDNESS') =>
  axiosInstance
    .get<GetPostsResponse>('/api/v1/posts', {
      headers: { 'Member-Id': MEMBER_ID },
      params: { postCategory },
    })
    .then(res => res.data.data.posts);

export const createPost = (body: CreatePostRequest) =>
  axiosInstance
    .post<CreatePostResponse>('/api/v1/posts', body, {
      headers: { 'Member-Id': MEMBER_ID },
    })
    .then(res => res.data.data);
