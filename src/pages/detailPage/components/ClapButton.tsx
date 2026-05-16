import { useState } from 'react';

import IcHand from '@assets/svg/IcHand';
import IcHandWave from '@assets/svg/IcHandWave';

import { cn } from '@utils/cn';

interface ClapButtonProps {
  count: number;
  isActive: boolean;
  onClick: () => Promise<void>;
}

const ClapButton = ({ count, isActive, onClick }: ClapButtonProps) => {
  const [isSupported, setIsSupported] = useState(isActive);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [supportCount, setSupportCount] = useState(count);

  const handleClapClick = async () => {
    if (isSupported || isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      await onClick();
      setIsSupported(true);
      setSupportCount(prevSupportCount => prevSupportCount + 1);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <button
      aria-label="나도 공감해요"
      className={cn(
        'text-2-m flex items-center gap-[0.4rem] rounded-full border px-[1rem] py-[0.6rem]',
        isSupported
          ? 'border-primary text-primary'
          : 'border-gray-500 text-gray-300',
      )}
      disabled={isSupported || isSubmitting}
      onClick={handleClapClick}
      type="button"
    >
      {isSupported ? (
        <IcHandWave aria-hidden="true" className="h-[2rem] w-[2rem]" />
      ) : (
        <IcHand aria-hidden="true" className="h-[2rem] w-[2rem]" />
      )}
      <span>{isSupported ? supportCount : '나도 했어요'}</span>
    </button>
  );
};

export default ClapButton;
