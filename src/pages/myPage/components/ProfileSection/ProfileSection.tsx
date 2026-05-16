interface ProfileSectionProps {
  nickname: string;
  profileImgUrl: string;
}

const ProfileSection = ({ nickname, profileImgUrl }: ProfileSectionProps) => {
  return (
    <section className="flex w-[12rem] flex-col items-center py-[1.6rem] gap-[1.6rem]">
      {profileImgUrl ? (
        <img
          src={profileImgUrl}
          alt="프로필 이미지"
          className="h-[12rem] w-[12rem] rounded-full object-cover"
        />
      ) : (
        <div className="h-[12rem] w-[12rem] rounded-full bg-gray-300" />
      )}
      <p className="title-4-sb w-full text-center text-gray-900">{nickname}</p>
    </section>
  );
};

export default ProfileSection;
