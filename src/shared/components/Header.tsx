import { useNavigate } from 'react-router-dom';

import IcArrowLeft from '@assets/svg/IcArrowLeft';

interface HeaderProps {
  title: string;
  isWhiteBackground?: boolean;
}

const Header = ({ title, isWhiteBackground = false }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <header
      className={`relative py-[1.3rem] text-gray-900 ${
        isWhiteBackground ? 'bg-white' : ''
      }`}
    >
      <button
        aria-label="뒤로 가기"
        className="absolute left-[2rem] top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center"
        onClick={() => navigate(-1)}
        type="button"
      >
        <IcArrowLeft aria-hidden="true"/>
      </button>

      <h1 className="title-4-sb text-center">{title}</h1>
    </header>
  );
};

export default Header;
