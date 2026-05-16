export type PostCategory = 'KINDNESS' | 'BOAST';

export interface MyPagePost {
  postId: number;
  category: PostCategory;
  content: string;
  clapCount: number;
  supportCount: number;
  commentCount: number;
  isClapped: boolean;
  isSupported: boolean;
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
