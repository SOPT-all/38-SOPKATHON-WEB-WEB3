import { axiosInstance } from '@apis/axios';

import type { ActionResponse } from '../types/actionResponse';

export const createPostSupport = async (postId: number) => {
  await axiosInstance.post<ActionResponse>(`/api/v1/posts/${postId}/support`);
};
