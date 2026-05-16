import type { SVGProps } from 'react';
const SvgIcHeart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="#CCC"
      stroke="#CCC"
      strokeWidth={1.25}
      d="m3.052 10.595 5.135 5.41a2.5 2.5 0 0 0 3.627 0l5.134-5.41c1.847-1.947 1.847-5.104 0-7.051-1.848-1.947-4.843-1.947-6.69 0a.355.355 0 0 1-.515 0c-1.848-1.947-4.843-1.947-6.69 0s-1.848 5.104 0 7.05Z"
    />
  </svg>
);
export default SvgIcHeart;
