export type PostCategory = 'KINDNESS' | 'BOAST';

export interface PostMember {
  memberId: number;
  name: string;
  profileImgUrl: string;
}

export interface MyPagePost {
  postId: number;
  member: PostMember;
  createdAt: string;
  category: PostCategory;
  content: string;
  clapCount: number;
  supportCount: number;
  commentCount: number;
}

export interface MyPageData {
  nickname: string;
  profileImgUrl: string;
  posts: MyPagePost[];
}

export interface MyPageResponse {
  success: boolean;
  code: string;
  message: string;
  data: MyPageData | null;
}
