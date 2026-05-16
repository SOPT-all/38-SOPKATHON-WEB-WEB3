import Header from '@components/Header.tsx';

import CommentInput from './components/CommentInput';
import CommentList from './components/CommentList';
import DetailContentSection from './components/DetailContentSection';
import { usePostDetailQuery } from './hooks/usePostDetailQuery';

const DetailPage = () => {
  const { data: postDetail, isLoading, isError } = usePostDetailQuery(4);

  if (isLoading) {
    return (
      <>
        <Header isWhiteBackground title="글 상세" />
        <p className="title-4-m px-[1.5rem] py-[2rem] text-gray-700">
          불러오는 중...
        </p>
      </>
    );
  }

  if (isError || !postDetail) {
    return (
      <>
        <Header isWhiteBackground title="글 상세" />
        <p className="title-4-m px-[1.5rem] py-[2rem] text-gray-700">
          게시글을 불러오지 못했어요.
        </p>
      </>
    );
  }

  return (
    <>
      <Header isWhiteBackground title="글 상세" />
      <main className="flex flex-col gap-[1rem] bg-bg pb-[7rem]">
        <DetailContentSection postDetail={postDetail} />
        <CommentList
          commentCount={postDetail.commentCount}
          comments={postDetail.comments}
          postId={postDetail.postId}
        />
      </main>
      <CommentInput postId={postDetail.postId} />
    </>
  );
};

export default DetailPage;
