import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '@components/Header.tsx';

type Category = 'gooddeed' | 'brag';

const WritePage = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState<Category>('gooddeed');
  const [text, setText] = useState('');

  const MAX_LENGTH = 100;
  const placeholder =
    category === 'gooddeed' ? '오늘의 선행은?' : '오늘의 자랑은?';
  const isActive = text.length > 0;

  const handleSubmit = () => {
    if (!isActive) return;
    // TODO: API 연동
    navigate('/');
  };

  return (
    <div className="flex flex-col h-full">
      <Header title="글 작성하기" />

      <div className="flex flex-col flex-1 px-[2rem] pt-6 pb-5 gap-4">
        {/* 카테고리 탭 */}
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

        {/* 텍스트 영역 */}
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

      {/* 등록 버튼 - 하단 고정 */}
      <div className="px-5 pb-8 pt-4">
        <button
          onClick={handleSubmit}
          disabled={!isActive}
          style={{ height: '56px' }}
          className={`w-full rounded-2xl text-white title-3-sb transition-colors ${
            isActive ? 'bg-primary' : 'bg-gray-300'
          }`}
        >
          등록
        </button>
      </div>
    </div>
  );
};

export default WritePage;
