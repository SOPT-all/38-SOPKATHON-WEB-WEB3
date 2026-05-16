import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className="grid h-24 grid-cols-[4rem_1fr_4rem] items-center px-6 text-gray-900">
      <div className="flex items-center justify-start">
        <button
          aria-label="뒤로 가기"
          className="flex h-10 w-10 items-center justify-center"
          onClick={() => navigate(-1)}
          type="button"
        >
          {/* TODO: 실제 아이콘 나오면 교체 예정 */}
          <svg
            aria-hidden="true"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
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
      </div>

      <h1 className="title-2-m text-center">{title}</h1>

      <span aria-hidden="true" />
    </header>
  );
};

export default Header;
