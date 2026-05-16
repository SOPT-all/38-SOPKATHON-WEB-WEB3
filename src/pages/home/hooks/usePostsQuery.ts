import { useQuery } from '@tanstack/react-query';

import { getPosts } from '@pages/home/apis/post';
import type { PostCategory } from '@pages/home/types/post';

export const usePostsQuery = (memberId: number, postCategory: PostCategory) =>
  useQuery({
    queryKey: ['posts', memberId, postCategory],
    queryFn: () => getPosts({ memberId, postCategory }),
  });
