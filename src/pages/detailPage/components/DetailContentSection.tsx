import { usePostClapMutation } from '../hooks/usePostClapMutation';
import { usePostSupportMutation } from '../hooks/usePostSupportMutation';
import type { PostDetail } from '../types/postDetail';
import { convertCreatedAt } from '../utils/convertCreatedAt';

import ClapButton from './ClapButton';
import HeartButton from './HeartButton';

const DetailContentSection = ({ postDetail }: { postDetail: PostDetail }) => {
  const { member, createdAt, content, clapCount, supportCount } = postDetail;
  const { mutateAsync: createPostClap } = usePostClapMutation();
  const { mutateAsync: createPostSupport } = usePostSupportMutation();

  return (
    <article className="bg-white px-[1.2rem] py-[2rem]">
      <div className="flex items-center gap-[0.8rem]">
        <img
          alt={`${member.name} 프로필`}
          className="h-[3rem] w-[3rem] rounded-full object-cover"
          src={member.profileImageUrl}
        />

        <div>
          <p className="text-2-m text-gray-800">{member.name}</p>
          <p className="label-1-m text-gray-500">
            {convertCreatedAt(createdAt)}
          </p>
        </div>
      </div>

      <p className="text-1-m mt-[1.2rem] text-gray-900">{content}</p>

      <div className="mt-[1.2rem] flex items-center gap-[0.8rem]">
        <HeartButton
          count={clapCount}
          isActive={postDetail.isClapped}
          onClick={() => createPostClap(postDetail.postId)}
        />
        <ClapButton
          count={supportCount}
          isActive={postDetail.isSupported}
          onClick={() => createPostSupport(postDetail.postId)}
        />
      </div>
    </article>
  );
};

export default DetailContentSection;
