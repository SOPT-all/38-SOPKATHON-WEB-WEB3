export interface Member {
  memberId: number;
  name: string;
  profileImgUrl: string;
}

export interface Post {
  postId: number;
  member: Member;
  createdAt: string;
  content: string;
  clapCount: number;
  supportCount: number;
  commentCount: number;
  isClapped: boolean;
  isSupported: boolean;
}

export interface PostListResponse {
  posts: Post[];
}

export type PostCategory = 'KINDNESS' | 'BOAST';
