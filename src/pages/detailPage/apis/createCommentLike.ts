import { axiosInstance } from '@apis/axios';

import type { ActionResponse } from '../types/actionResponse';

export const createCommentLike = async (postId: number, commentId: number) => {
  await axiosInstance.post<ActionResponse>(
    `/api/v1/posts/${postId}/comments/${commentId}/like`,
  );
};
