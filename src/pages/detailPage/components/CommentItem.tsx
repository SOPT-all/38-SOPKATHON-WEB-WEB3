import { useCommentLikeMutation } from '../hooks/useCommentLikeMutation';
import type { Comment } from '../types/postDetail';
import { convertCreatedAt } from '../utils/convertCreatedAt';

import HeartButton from './HeartButton';

interface CommentItemProps {
  comment: Comment;
  postId: number;
}

const CommentItem = ({ comment, postId }: CommentItemProps) => {
  const { member, content, createdAt } = comment;
  const { mutateAsync: createCommentLike } = useCommentLikeMutation();

  return (
    <article>
      <div className="mx-[2rem] my-[1.6rem]">
        <div className="flex items-center">
          <img
            alt={`${member.name} 프로필`}
            className="h-[3rem] w-[3rem] rounded-full object-cover mr-[0.4rem]"
            src={member.profileImageUrl}
          />

          <div className="flex items-center gap-[0.4rem]">
            <p className="text-2-m text-gray-900">{member.name}</p>
            <p className="label-1-m text-gray-500">
              {convertCreatedAt(createdAt)}
            </p>
          </div>
        </div>

        <div className="flex items-end justify-between">
          <p className="text-1-m text-gray-800">{content}</p>
          <HeartButton
            count={comment.commentLikeCount}
            isActive={comment.isLiked}
            onClick={() =>
              createCommentLike({ postId, commentId: comment.commentId })
            }
          />
        </div>
      </div>
    </article>
  );
};

export default CommentItem;
