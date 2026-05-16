import { useNavigate } from 'react-router-dom';

import { routePath } from '@routes/path';

import { IcEdit } from '@shared/assets/svg';

const FloatingButton = () => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      aria-label="글쓰기"
      onClick={() => navigate(routePath.WRITE)}
      className="fixed bottom-[2.4rem] left-1/2 z-20 flex h-[5.6rem] w-[5.6rem] translate-x-[14.7rem] items-center justify-center rounded-full bg-primary shadow-[0_0.4rem_1.2rem_rgba(46,196,153,0.36)]"
    >
      <IcEdit className="h-[3.2rem] w-[3.2rem]" />
    </button>
  );
};

export default FloatingButton;
