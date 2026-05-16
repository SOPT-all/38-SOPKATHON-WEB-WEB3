import { IcHandWave, IcHeartFill, IcMessage } from '@shared/assets/svg';

interface PostCardProps {
  profileImgUrl: string;
  name: string;
  time: string;
  content: string;
  likeCount: number;
  commentCount: number;
  empathyCount: number;
}

const PostCard = ({
  profileImgUrl,
  name,
  time,
  content,
  likeCount,
  commentCount,
  empathyCount,
}: PostCardProps) => {
  return (
    <article className="flex flex-col items-start rounded-[1rem] bg-white p-[1rem] shadow-[0_1px_5.6px_0_rgba(0,0,0,0.08)]">
      <header className="flex items-center gap-[0.5rem]">
        <figure className="h-[1.875rem] w-[1.875rem] shrink-0 overflow-hidden rounded-full">
          <img src={profileImgUrl} alt={`${name}의 프로필`} />
        </figure>
        <div className="flex flex-col">
          <span className="text-2-m text-gray-800">{name}</span>
          <span className="label-1-m text-gray-500">{time}</span>
        </div>
      </header>

      <p className="mt-[0.56rem] w-full text-1-m text-gray-800 line-clamp-2">
        {content}
      </p>

      <footer className="mt-[1rem] flex w-full items-center">
        <button type="button" className="flex items-center gap-[0.25rem]">
          <IcHeartFill className="h-[2rem] w-[2rem]" />
          <span className="text-2-m text-gray-900">{likeCount}</span>
        </button>
        <button
          type="button"
          className="ml-[1.25rem] flex items-center gap-[0.25rem]"
        >
          <IcMessage className="h-[2rem] w-[2rem]" />
          <span className="text-2-m text-gray-900">{commentCount}</span>
        </button>
        <button
          type="button"
          className="ml-auto flex items-center gap-[0.25rem]"
        >
          <IcHandWave className="h-[2rem] w-[2rem]" />
          <span className="text-2-m text-gray-900">{empathyCount}</span>
        </button>
      </footer>
    </article>
  );
};

export default PostCard;
