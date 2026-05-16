import { IcHandWave, IcHeartFill } from '@shared/assets/svg';

interface HotCardProps {
  content: string;
  likeCount: number;
  empathyCount: number;
  onClick?: () => void;
}

const HotCard = ({
  content,
  likeCount,
  empathyCount,
  onClick,
}: HotCardProps) => {
  return (
    <button
      className="flex w-full items-center justify-between rounded-[1rem] border border-primary bg-primary-light px-[1.0625rem] py-[0.875rem]"
      type="button"
      disabled={!onClick}
      onClick={onClick}
    >
      <div className="flex min-w-0 items-center gap-[0.5rem]">
        <span className="shrink-0 text-2-sb text-point-red">HOT</span>
        <span className="truncate text-1-m text-gray-800">{content}</span>
      </div>

      <div className="flex shrink-0 items-center gap-[0.5rem]">
        <div className="flex items-center gap-[0.25rem]">
          <IcHeartFill className="h-[1.25rem] w-[1.25rem]" />
          <span className="text-2-m text-gray-900">{likeCount}</span>
        </div>
        <div className="flex items-center gap-[0.25rem]">
          <IcHandWave className="h-[1.25rem] w-[1.25rem]" />
          <span className="text-2-m text-gray-900">{empathyCount}</span>
        </div>
      </div>
    </button>
  );
};

export default HotCard;
