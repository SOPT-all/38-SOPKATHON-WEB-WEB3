import type { PostCategory } from '@pages/home/types/post';

export type CategoryTab = '선행' | '자랑';

export const CATEGORY_MAP: Record<CategoryTab, PostCategory> = {
  선행: 'KINDNESS',
  자랑: 'BOAST',
};
