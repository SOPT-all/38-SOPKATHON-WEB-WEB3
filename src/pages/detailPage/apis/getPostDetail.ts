import { axiosInstance } from '@apis/axios';

import type { PostDetailResponse } from '../types/postDetail';

export const getPostDetail = async (postId: number) => {
  const response = await axiosInstance.get<PostDetailResponse>(
    `/api/v1/posts/${postId}`,
  );

  return response.data;
};
