import type { SVGProps } from 'react';
const SvgIcMessage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="#607DFF"
      d="M10 1.042a8.959 8.959 0 1 1-4.338 16.797.26.26 0 0 0-.21-.026l-2.102.743c-1.288.455-2.528-.785-2.073-2.073l.773-2.19a.26.26 0 0 0-.022-.202A8.9 8.9 0 0 1 1.042 10 8.96 8.96 0 0 1 10 1.042M5.875 9a1.042 1.042 0 1 0 0 2.084 1.042 1.042 0 0 0 0-2.084m4.166 0a1.042 1.042 0 1 0 .001 2.084 1.042 1.042 0 0 0 0-2.084m4.168 0a1.042 1.042 0 1 0 0 2.084 1.042 1.042 0 0 0 0-2.084"
    />
  </svg>
);
export default SvgIcMessage;
