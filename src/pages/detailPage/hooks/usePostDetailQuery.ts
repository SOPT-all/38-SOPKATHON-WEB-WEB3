import { useQuery } from '@tanstack/react-query';

import { getPostDetail } from '../apis/getPostDetail';
import { convertPostDetail } from '../utils/convertPostDetail';

export const usePostDetailQuery = (postId: number, enabled = true) => {
  return useQuery({
    queryKey: ['postDetail', postId],
    queryFn: () => getPostDetail(postId),
    enabled,
    select: ({ data }) => convertPostDetail(data),
  });
};
