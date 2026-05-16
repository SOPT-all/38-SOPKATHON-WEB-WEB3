import type { Comment } from '../types/postDetail';

import CommentItem from './CommentItem';

interface CommentListProps {
  comments: Comment[];
  postId: number;
  commentCount: number;
}

const CommentList = ({ comments, postId, commentCount }: CommentListProps) => {
  return (
    <section aria-label="댓글 목록" className="bg-white">
      <h2 className="text-2-sb px-[2rem] py-[0.8rem] text-gray-800">
        댓글수 <span className="text-primary">{commentCount}</span>개
      </h2>
      {comments.map(comment => (
        <CommentItem
          comment={comment}
          key={comment.commentId}
          postId={postId}
        />
      ))}
    </section>
  );
};

export default CommentList;
