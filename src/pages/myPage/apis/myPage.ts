import type { MyPageResponse } from '@pages/myPage/types/myPage';

import { axiosInstance } from '@shared/apis/axios';

export const getMyPage = async (): Promise<MyPageResponse> => {
  const { data } = await axiosInstance.get<MyPageResponse>('/api/v1/member');
  return data;
};
