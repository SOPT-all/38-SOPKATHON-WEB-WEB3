import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

import { createPost } from '@apis/writePosts';

export const useCreatePost = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: createPost,
    onSuccess: () => navigate('/'),
  });
};
