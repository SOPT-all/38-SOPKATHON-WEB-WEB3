import { axiosInstance } from '@apis/axios';

import type { ActionResponse } from '../types/actionResponse';

export const createComment = async (postId: number, content: string) => {
  await axiosInstance.post<ActionResponse>(`/api/v1/posts/${postId}/comments`, {
    content,
  });
};
