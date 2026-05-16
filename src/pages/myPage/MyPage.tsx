import { useNavigate } from 'react-router-dom';

import MyPageHeader from '@pages/myPage/components/MyPageHeader/MyPageHeader';
import PostCard from '@pages/myPage/components/PostCard/PostCard';
import ProfileSection from '@pages/myPage/components/ProfileSection/ProfileSection';
import { useGetMyPage } from '@pages/myPage/hooks/useGetMyPage';

const MyPage = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetMyPage();

  const myPageData = data?.data;

  if (isLoading)
    return (
      <div className="flex min-h-screen items-center justify-center">
        로딩 중...
      </div>
    );
  if (isError || !myPageData)
    return (
      <div className="flex min-h-screen items-center justify-center">
        오류가 발생했습니다.
      </div>
    );

  const { nickname, profileImgUrl, posts } = myPageData;

  return (
    <div className="flex flex-col bg-gray-100 min-h-screen">
      <MyPageHeader />
      <div className="flex flex-col items-center px-[1.6rem]">
        <ProfileSection nickname={nickname} profileImgUrl={profileImgUrl} />
        <section className="mt-[1.6rem] flex w-full flex-col gap-[1.2rem]">
          <p className="text-1-sb text-gray-900">내가 작성한 글</p>
          {posts.map(post => (
            <PostCard
              key={post.postId}
              category={post.category}
              content={post.content}
              supportCount={post.supportCount}
              commentCount={post.commentCount}
              clapCount={post.clapCount}
              onClick={() => navigate(`/detail/${post.postId}`)}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default MyPage;
