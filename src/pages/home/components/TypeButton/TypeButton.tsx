import { cn } from '@utils/cn';

interface TypeButtonProps {
  variant: '선행' | '자랑';
  isSelected: boolean;
  onClick: () => void;
}

const TypeButton = ({ variant, isSelected, onClick }: TypeButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'rounded-full px-[2rem] py-[0.8rem] text-[1.4rem] font-medium transition-colors',
        isSelected ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-500',
      )}
    >
      {variant}
    </button>
  );
};

export default TypeButton;
