import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createPostClap } from '../apis/createPostClap';

export const usePostClapMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPostClap,
    onSuccess: (_, postId) => {
      queryClient.invalidateQueries({ queryKey: ['postDetail', postId] });
    },
  });
};
