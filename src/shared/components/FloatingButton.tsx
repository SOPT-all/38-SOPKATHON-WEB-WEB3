import { useNavigate } from 'react-router';

import IcEdit from '@assets/svg/IcEdit';

const FloatingButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/write')}
      style={{ width: '56px', height: '56px' }}
      className="absolute bottom-8 right-5 rounded-full bg-primary shadow-lg flex items-center justify-center"
    >
      <IcEdit width={36} height={36} />
    </button>
  );
};

export default FloatingButton;
