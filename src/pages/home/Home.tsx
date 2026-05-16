import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { convertCreatedAt } from '@pages/detailPage/utils/convertCreatedAt';
import CategoryTab from '@pages/home/components/CategoryTab';
import HomeHeader from '@pages/home/components/HomeHeader';
import HotCard from '@pages/home/components/HotCard';
import PostCard from '@pages/home/components/PostCard';
import { CATEGORY_MAP } from '@pages/home/constants/category';
import type { CategoryTab as CategoryTabType } from '@pages/home/constants/category';
import { usePostsQuery } from '@pages/home/hooks/usePostsQuery';

import FloatingButton from '@shared/components/FloatingButton';

// TODO: 로그인 구현 후 실제 memberId로 교체
const TEMP_MEMBER_ID = 1;

const Home = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState<CategoryTabType>('선행');

  const { data, isLoading } = usePostsQuery(
    TEMP_MEMBER_ID,
    CATEGORY_MAP[category],
  );

  return (
    <div className="relative">
      <div className="sticky top-0 z-10 bg-bg">
        <HomeHeader
          username="익명의 감자튀김"
          category={category}
          onClick={() => navigate('/my-page')}
        />
      </div>
      <div className="mt-[1.25rem] flex flex-col gap-[0.8rem] px-[2rem]">
        <CategoryTab category={category} onCategoryChange={setCategory} />
        <HotCard
          content="아름다운 가게 봉사다녀왔어요 ㅎㅎ"
          likeCount={100}
          empathyCount={50}
        />
        {isLoading && (
          <p className="text-center text-gray-400">불러오는 중...</p>
        )}
        {data?.posts.map(post => (
          <PostCard
            key={post.postId}
            profileImgUrl={post.member.profileImgUrl}
            name={post.member.name}
            time={convertCreatedAt(post.createdAt)}
            content={post.content}
            likeCount={post.clapCount}
            commentCount={post.commentCount}
            empathyCount={post.supportCount}
            onClick={() => navigate(`/detail/${post.postId}`)}
          />
        ))}
      </div>
      <FloatingButton />
    </div>
  );
};

export default Home;
