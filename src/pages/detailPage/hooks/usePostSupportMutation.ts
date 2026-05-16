import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createPostSupport } from '../apis/createPostSupport';

export const usePostSupportMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPostSupport,
    onSuccess: (_, postId) => {
      queryClient.invalidateQueries({ queryKey: ['postDetail', postId] });
    },
  });
};
