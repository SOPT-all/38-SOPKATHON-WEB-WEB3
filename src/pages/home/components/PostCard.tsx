interface PostCardProps {
  profileImage: string;
  nickname: string;
  time: string;
  content: string;
  likeCount: number;
  commentCount: number;
  empathyCount: number;
}

const PostCard = ({
  profileImage,
  nickname,
  time,
  content,
  likeCount,
  commentCount,
  empathyCount,
}: PostCardProps) => {
  return (
    <article className="rounded-2xl bg-gray-100 p-4">
      <header className="flex items-center gap-[?]">
        <figure className="overflow-hidden rounded-full">
          <img src={profileImage} alt={`${nickname}의 프로필`} />
        </figure>
        <div className="flex flex-col">
          <span>{nickname}</span>
          <span>{time}</span>
        </div>
      </header>

      <p className="line-clamp-2">{content}</p>

      <footer className="flex items-center">
        <button className="" type="button">
          <span>♡</span>
          <span>{likeCount}</span>
        </button>
        <button className="" type="button">
          <span>💬</span>
          <span>{commentCount}</span>
        </button>
        <button className="" type="button">
          <span>🔥</span>
          <span>{empathyCount}</span>
        </button>
      </footer>
    </article>
  );
};

export default PostCard;
