import { useState } from 'react';

import IcHeart from '@assets/svg/IcHeart';
import IcHeartFill from '@assets/svg/IcHeartFill';

import { cn } from '@utils/cn';

interface HeartButtonProps {
  count: number;
  isActive: boolean;
  onClick: () => Promise<void>;
}

const HeartButton = ({ count, isActive, onClick }: HeartButtonProps) => {
  const [isLiked, setIsLiked] = useState(isActive);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [likeCount, setLikeCount] = useState(count);

  const handleHeartClick = async () => {
    if (isLiked || isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      await onClick();
      setIsLiked(true);
      setLikeCount(prevLikeCount => prevLikeCount + 1);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <button
      aria-label={`좋아요 ${likeCount}개`}
      className={cn(
        'text-2-m flex items-center gap-[0.4rem] rounded-full border px-[1rem] py-[0.6rem]',
        isLiked
          ? 'border-point-red text-point-red'
          : 'border-gray-500 text-gray-300',
      )}
      disabled={isLiked || isSubmitting}
      onClick={handleHeartClick}
      type="button"
    >
      {isLiked ? (
        <IcHeartFill aria-hidden="true" className="h-[2rem] w-[2rem]" />
      ) : (
        <IcHeart aria-hidden="true" className="h-[2rem] w-[2rem]" />
      )}
      <span>{likeCount}</span>
    </button>
  );
};

export default HeartButton;
