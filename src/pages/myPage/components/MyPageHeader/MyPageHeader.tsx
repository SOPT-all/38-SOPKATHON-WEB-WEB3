import { useNavigate } from 'react-router-dom';

const MyPageHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-10 flex w-full items-center justify-between gap-[0.8rem] px-[2rem] py-[1.3rem] text-gray-900">
      <button
        aria-label="뒤로 가기"
        type="button"
        onClick={() => navigate(-1)}
        className="flex h-[2.4rem] w-[2.4rem] items-center justify-center"
      >
        {/* TODO: 실제 아이콘 나오면 교체 예정 */}
        <svg
          aria-hidden="true"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[2.4rem] w-[2.4rem]"
        >
          <path
            d="M15 18 9 12l6-6"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </button>
      <h1 className="h-[2.4rem] w-[4.1rem] title-4-sb text-[#000000]">
        프로필
      </h1>
      <span aria-hidden="true" className="h-[2.4rem] w-[2.4rem]" />
    </header>
  );
};

export default MyPageHeader;
