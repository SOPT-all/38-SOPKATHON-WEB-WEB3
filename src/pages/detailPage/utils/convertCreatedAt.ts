export const convertCreatedAt = (createdAt: string) => {
  const createdDate = new Date(createdAt);

  if (Number.isNaN(createdDate.getTime())) {
    return '';
  }

  const today = new Date();
  const isCreatedToday =
    createdDate.getFullYear() === today.getFullYear() &&
    createdDate.getMonth() === today.getMonth() &&
    createdDate.getDate() === today.getDate();

  const formattedTime = new Intl.DateTimeFormat('ko-KR', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(createdDate);

  if (isCreatedToday) {
    return formattedTime;
  }

  const formattedDate = [
    createdDate.getFullYear(),
    String(createdDate.getMonth() + 1).padStart(2, '0'),
    String(createdDate.getDate()).padStart(2, '0'),
  ].join('.');

  return `${formattedDate} ${formattedTime}`;
};
