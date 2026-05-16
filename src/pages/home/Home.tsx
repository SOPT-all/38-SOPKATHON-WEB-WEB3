import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CategoryTab from '@pages/home/components/CategoryTab';
import HomeHeader from '@pages/home/components/HomeHeader';
import HotCard from '@pages/home/components/HotCard';
import PostCard from '@pages/home/components/PostCard';

type Category = '선행' | '자랑';

const MOCK_POSTS = [
  {
    id: 1,
    profileImgUrl: '',
    name: '닉네임',
    time: '시간',
    content: '저 오늘 잘했어요',
    likeCount: 100,
    commentCount: 1,
    empathyCount: 50,
  },
  {
    id: 2,
    profileImgUrl: '',
    name: '닉네임',
    time: '시간',
    content:
      '저 오늘 잘했어요 저 오늘 잘했어요 저 오늘 잘했어요 저 오늘 잘했어요 저 오늘 잘했어요',
    likeCount: 100,
    commentCount: 1,
    empathyCount: 50,
  },
  {
    id: 3,
    profileImgUrl: '',
    name: '닉네임',
    time: '시간',
    content: '저 오늘 잘했어요',
    likeCount: 100,
    commentCount: 1,
    empathyCount: 50,
  },
];

function Home() {
  const navigate = useNavigate();
  const [category, setCategory] = useState<Category>('선행');

  return (
    <div className="min-h-[61.3rem]">
      <div className="sticky top-0 z-10 bg-bg">
        <HomeHeader username="익명#10" category={category} />
      </div>
      <div className="mt-[1.25rem] flex flex-col gap-[0.5rem] px-[2rem]">
        <CategoryTab category={category} onCategoryChange={setCategory} />
        <HotCard
          content="9시 서들 출발 했나요??"
          likeCount={100}
          empathyCount={50}
          onClick={() => navigate('/detail/1')}
        />
        {MOCK_POSTS.map(post => (
          <PostCard
            key={post.id}
            profileImgUrl={post.profileImgUrl}
            name={post.name}
            time={post.time}
            content={post.content}
            likeCount={post.likeCount}
            commentCount={post.commentCount}
            empathyCount={post.empathyCount}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
