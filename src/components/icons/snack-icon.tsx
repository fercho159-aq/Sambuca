import type { SVGProps } from "react";

export function SnackIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M7 21h10" />
      <path d="M12 21v-7.5" />
      <path d="M4 11a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h1" />
      <path d="M20 11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1" />
      <path d="M12 13.5c-3.5 0-6.5-1.5-6.5-3.5s3-3.5 6.5-3.5 6.5 1.5 6.5 3.5-3 3.5-6.5 3.5Z" />
    </svg>
  );
}
