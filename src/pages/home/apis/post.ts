import type { PostCategory, PostListResponse } from '@pages/home/types/post';

import { axiosInstance } from '@apis/axios';

interface GetPostsParams {
  memberId: number;
  postCategory: PostCategory;
}

interface ApiResponse<T> {
  success: boolean;
  code: string;
  message: string;
  data: T;
}

export const getPosts = async ({
  memberId,
  postCategory,
}: GetPostsParams): Promise<PostListResponse> => {
  const { data } = await axiosInstance.get<ApiResponse<PostListResponse>>(
    '/api/v1/posts',
    {
      headers: { 'Member-Id': memberId },
      params: { postCategory },
    },
  );

  return data.data;
};
