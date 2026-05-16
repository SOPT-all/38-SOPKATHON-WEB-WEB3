type Category = '선행' | '자랑';

interface CategoryTabProps {
  category: Category;
  onCategoryChange: (category: Category) => void;
}

const CategoryTab = ({ category, onCategoryChange }: CategoryTabProps) => {
  return (
    <div className="flex gap-[0.5rem]">
      <button
        className={
          category === '선행'
            ? 'title-3-sb text-primary'
            : 'title-3-m text-gray-500'
        }
        type="button"
        onClick={() => onCategoryChange('선행')}
      >
        선행
      </button>
      <button
        className={
          category === '자랑'
            ? 'title-3-sb text-primary'
            : 'title-3-m text-gray-500'
        }
        type="button"
        onClick={() => onCategoryChange('자랑')}
      >
        자랑
      </button>
    </div>
  );
};

export default CategoryTab;
