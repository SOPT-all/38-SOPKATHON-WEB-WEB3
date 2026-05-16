import MyPageHeader from './components/MyPageHeader/MyPageHeader';
import PostCard from './components/PostCard/PostCard';
import ProfileSection from './components/ProfileSection/ProfileSection';
import type { MyPageData } from './types/myPage';

const MOCK_DATA: MyPageData = {
  nickname: '익명#102948',
  profileImgUrl: '',
  posts: [
    {
      postId: 1,
      member: { memberId: 1, name: '익명#102948', profileImgUrl: '' },
      createdAt: '2026-05-16T19:18:47.786Z',
      category: 'KINDNESS',
      content: '저 오늘 만원버스에서 할머님께 자리를 양보해 드렸어요!',
      supportCount: 100,
      commentCount: 19,
      clapCount: 50,
    },
    {
      postId: 2,
      member: { memberId: 1, name: '익명#102948', profileImgUrl: '' },
      createdAt: '2026-05-15T10:00:00.000Z',
      category: 'BOAST',
      content: '오늘 다이어트 1개월 성공했어요!',
      supportCount: 30,
      commentCount: 5,
      clapCount: 20,
    },
    {
      postId: 3,
      member: { memberId: 1, name: '익명#102948', profileImgUrl: '' },
      createdAt: '2026-05-14T08:00:00.000Z',
      category: 'KINDNESS',
      content: '길에서 길을 잃은 어르신 목적지까지 모셔다 드렸어요',
      supportCount: 12,
      commentCount: 3,
      clapCount: 8,
    },
  ],
};

const MyPage = () => {
  const { nickname, profileImgUrl, posts } = MOCK_DATA;

  return (
    <div className="flex flex-col bg-gray-100 min-h-screen">
      <MyPageHeader />
      <div className="flex flex-col items-center px-[1.6rem]">
        <ProfileSection nickname={nickname} profileImgUrl={profileImgUrl} />
        <section className="mt-[1.6rem] flex w-full flex-col gap-[1.2rem]">
          <p className="text-1-sb text-[#191919]">내가 작성한 글</p>
          {posts.map(post => (
            <PostCard
              key={post.postId}
              category={post.category}
              content={post.content}
              supportCount={post.supportCount}
              commentCount={post.commentCount}
              clapCount={post.clapCount}
              onClick={() => {}}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default MyPage;
