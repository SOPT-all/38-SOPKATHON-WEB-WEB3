export interface PostDetailResponse {
  success: boolean;
  code: string;
  message: string;
  data: PostDetailDataResponse;
}

export interface PostDetailDataResponse {
  postId: number;
  member: PostMemberResponse;
  createdAt: string;
  content: string;
  clapCount: number;
  supportCount: number;
  commentCount: number;
  isClapped: boolean;
  isSupported: boolean;
  comments: CommentResponse[];
}

export interface PostMemberResponse {
  memberId: number;
  name: string;
  profileImgUrl: string;
}

export interface CommentResponse {
  commentId: number;
  content: string;
  member: CommentMemberResponse;
  createdAt: string;
  commentLikeCount: number;
  isLiked: boolean;
}

export interface CommentMemberResponse {
  memberId: number;
  name: string;
  profileImgUrl: string;
}

export interface PostDetail {
  postId: number;
  member: Member;
  createdAt: string;
  content: string;
  clapCount: number;
  supportCount: number;
  commentCount: number;
  isClapped: boolean;
  isSupported: boolean;
  comments: Comment[];
}

export interface Member {
  memberId: number;
  name: string;
  profileImageUrl: string;
}

export interface Comment {
  commentId: number;
  content: string;
  member: Member;
  createdAt: string;
  commentLikeCount: number;
  isLiked: boolean;
}
