import { IcHandWave, IcHeartFill, IcMessage } from '@shared/assets/svg';

import type { PostCategory } from '../../types/myPage';

const CATEGORY_LABEL: Record<PostCategory, string> = {
  KINDNESS: '선행',
  BOAST: '자랑',
};

interface PostCardProps {
  category: PostCategory;
  content: string;
  supportCount: number;
  commentCount: number;
  clapCount: number;
  onClick: () => void;
}

const PostCard = ({ category, content, supportCount, commentCount, clapCount, onClick }: PostCardProps) => {
  return (
    <article
      onClick={onClick}
      className="flex w-full cursor-pointer flex-col gap-[0.8rem] rounded-[1.5rem] bg-white px-[1.6rem] py-[1.2rem] shadow-[0_1px_5.6px_0_rgb(0_0_0_/_8%)]"
    >
      <span className="label-1-m inline-flex h-[2.1rem] w-[3.8rem] items-center justify-center whitespace-nowrap rounded-[1.6rem] border border-[#2EC499] bg-[#E3FEF0] px-[1rem] text-[#2EC499]">
        {CATEGORY_LABEL[category]}
      </span>
      <p className="text-1-m w-[31.1rem] truncate px-[0.8rem] text-gray-900">{content}</p>
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-[1.2rem]">
          <span className="flex items-center gap-[0.4rem]">
            <IcHeartFill className="h-[2rem] w-[2rem] shrink-0" />
            <span className="text-2-m w-[2rem] text-[#1B1C23]">{supportCount}</span>
          </span>
          <span className="flex items-center gap-[0.4rem]">
            <IcMessage className="h-[2rem] w-[2rem] shrink-0" />
            <span className="text-2-m w-[2rem] text-[#1B1C23]">{commentCount}</span>
          </span>
        </div>
        <span className="flex items-center gap-[0.4rem]">
          <IcHandWave className="h-[2rem] w-[2rem] shrink-0" />
          <span className="text-2-m w-[2rem] text-[#1B1C23]">{clapCount}</span>
        </span>
      </div>
    </article>
  );
};

export default PostCard;
