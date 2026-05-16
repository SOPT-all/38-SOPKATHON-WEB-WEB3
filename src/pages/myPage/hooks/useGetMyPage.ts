import { useQuery } from '@tanstack/react-query';

import { getMyPage } from '@pages/myPage/apis/myPage';

export const useGetMyPage = () => {
  return useQuery({
    queryKey: ['myPage'],
    queryFn: getMyPage,
  });
};
