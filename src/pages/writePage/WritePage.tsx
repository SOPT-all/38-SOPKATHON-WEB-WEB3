import { useState } from 'react';

import type { PostCategory } from '@shared/apis/writePosts';
import { useCreatePost } from '@shared/hooks/useCreatePost';

import Header from '@components/Header.tsx';

type Category = 'gooddeed' | 'brag';

const CATEGORY_MAP: Record<Category, PostCategory> = {
  gooddeed: 'KINDNESS',
  brag: 'BOAST',
};

const WritePage = () => {
  const [category, setCategory] = useState<Category>('gooddeed');
  const [text, setText] = useState('');

  const { mutate: createPost, isPending } = useCreatePost();

  const MAX_LENGTH = 100;
  const placeholder =
    category === 'gooddeed' ? '오늘의 선행은?' : '오늘의 자랑은?';
  const isActive = text.length > 0;

  const handleSubmit = () => {
    if (!isActive || isPending) return;
    createPost({ content: text, category: CATEGORY_MAP[category] });
  };

  return (
    <div className="flex flex-col h-full">
      <Header title="글 작성하기" />

      <div className="flex flex-col flex-1 px-[2rem] pt-6 pb-5 gap-4">
        <div className="flex gap-2">
          {(['gooddeed', 'brag'] as Category[]).map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              style={{ width: '94px', height: '38px' }}
              className={`rounded-full text-1-sb transition-colors ${
                category === cat
                  ? 'bg-primary-light text-primary border border-primary'
                  : 'bg-gray-200 text-gray-500 border border-gray-200'
              }`}
            >
              {cat === 'gooddeed' ? '선행' : '자랑'}
            </button>
          ))}
        </div>

        <div
          className="relative bg-white rounded-2xl p-[2.4rem]"
          style={{ height: '265px' }}
        >
          <textarea
            value={text}
            onChange={e => setText(e.target.value)}
            maxLength={MAX_LENGTH}
            placeholder={placeholder}
            className="w-full h-full resize-none outline-none text-gray-900 text-1-m placeholder:text-gray-400 bg-transparent"
          />
          <span className="absolute bottom-4 right-4 text-2-m text-gray-400">
            ({text.length}/{MAX_LENGTH})
          </span>
        </div>
      </div>

      <div className="px-5 pb-8 pt-4">
        <button
          onClick={handleSubmit}
          disabled={!isActive || isPending}
          style={{ height: '56px' }}
          className={`w-full rounded-2xl text-white title-3-sb transition-colors ${
            isActive && !isPending ? 'bg-primary' : 'bg-gray-300'
          }`}
        >
          {isPending ? '등록 중...' : '등록'}
        </button>
      </div>
    </div>
  );
};

export default WritePage;
