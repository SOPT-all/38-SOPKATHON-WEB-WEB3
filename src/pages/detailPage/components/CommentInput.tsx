import { useState, type FormEvent } from 'react';

import IcSend from '@assets/svg/IcSend';

import { useCreateCommentMutation } from '../hooks/useCreateCommentMutation';

const CommentInput = ({ postId }: { postId: number }) => {
  const [content, setContent] = useState('');
  const { mutateAsync: createComment, isPending } = useCreateCommentMutation();

  const handleCommentSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!content.trim()) {
      return;
    }

    await createComment({ postId, content });
    setContent('');
  };

  return (
    <form
      className="fixed bottom-0 left-1/2 w-full max-w-[43rem] -translate-x-1/2 bg-white px-[2.4rem] pb-[1.6rem] pt-[0.8rem]"
      onSubmit={handleCommentSubmit}
    >
      <label className="sr-only" htmlFor="comment">
        댓글 입력
      </label>
      <div className="flex items-center gap-[0.8rem] rounded-[1rem] bg-gray-200 px-[1.2rem] py-[0.6rem]">
        <input
          className="text-1-m w-full text-gray-700 placeholder:text-white"
          id="comment"
          onChange={event => setContent(event.target.value)}
          placeholder="댓글 작성하기"
          type="text"
          value={content}
        />
        <button
          aria-label="댓글 등록"
          className="flex items-center justify-center rounded-[1.6rem] bg-white pb-[0.3rem] pl-[0.7rem] pr-[0.9rem] pt-[0.5rem]"
          disabled={isPending}
          type="submit"
        >
          <IcSend aria-hidden="true" className="h-[2rem] w-[2rem]" />
        </button>
      </div>
    </form>
  );
};

export default CommentInput;
