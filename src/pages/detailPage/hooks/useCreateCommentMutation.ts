import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createComment } from '../apis/createComment';

export const useCreateCommentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ postId, content }: { postId: number; content: string }) =>
      createComment(postId, content),
    onSuccess: (_, { postId }) => {
      queryClient.invalidateQueries({ queryKey: ['postDetail', postId] });
    },
  });
};
