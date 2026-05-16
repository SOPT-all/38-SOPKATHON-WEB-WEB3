import type {
  CommentResponse,
  PostDetail,
  PostDetailDataResponse,
} from '../types/postDetail';

const convertComment = ({
  commentId,
  content,
  member,
  createdAt,
  commentLikeCount,
  isLiked,
}: CommentResponse) => {
  return {
    commentId,
    content,
    createdAt,
    commentLikeCount,
    isLiked,
    member: {
      memberId: member.memberId,
      name: member.name,
      profileImageUrl: member.profileImgUrl,
    },
  };
};

export const convertPostDetail = ({
  postId,
  member,
  createdAt,
  content,
  clapCount,
  supportCount,
  commentCount,
  isClapped,
  isSupported,
  comments,
}: PostDetailDataResponse): PostDetail => {
  return {
    postId,
    member: {
      memberId: member.memberId,
      name: member.name,
      profileImageUrl: member.profileImgUrl,
    },
    createdAt,
    content,
    clapCount,
    supportCount,
    commentCount,
    isClapped,
    isSupported,
    comments: comments.map(convertComment),
  };
};
