import { useQuery } from '@tanstack/react-query';

import { getPostDetail } from '../apis/getPostDetail';
import { convertPostDetail } from '../utils/convertPostDetail';

export const usePostDetailQuery = (postId: number) => {
  return useQuery({
    queryKey: ['postDetail', postId],
    queryFn: () => getPostDetail(postId),
    select: ({ data }) => convertPostDetail(data),
  });
};
