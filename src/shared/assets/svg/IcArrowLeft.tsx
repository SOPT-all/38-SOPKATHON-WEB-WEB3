import type { SVGProps } from 'react';
const SvgIcArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#2B3F6C"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m15 5-5.33 6.22a1.2 1.2 0 0 0 0 1.56L15 19"
    />
  </svg>
);
export default SvgIcArrowLeft;
