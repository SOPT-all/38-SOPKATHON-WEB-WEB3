import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createCommentLike } from '../apis/createCommentLike';

export const useCommentLikeMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      postId,
      commentId,
    }: {
      postId: number;
      commentId: number;
    }) => createCommentLike(postId, commentId),
    onSuccess: (_, { postId }) => {
      queryClient.invalidateQueries({ queryKey: ['postDetail', postId] });
    },
  });
};
