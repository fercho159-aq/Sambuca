import type { SVGProps } from "react";

export function PizzaIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M15 11h.01" />
      <path d="M11 15h.01" />
      <path d="M16 16h.01" />
      <path d="m2 16 2.2-1.2A5.2 5.2 0 0 0 8 13.2a5.2 5.2 0 0 0 3.8-3.6l1-4.2a2.2 2.2 0 0 1 3.9 1.4l-3 10.3" />
      <path d="M21.5 13c-1.6 0-3-1.4-3-3s1.4-3 3-3" />
      <path d="M12.5 22c-1.6 0-3-1.4-3-3s1.4-3 3-3" />
      <path d="M19.3 14.7a6.6 6.6 0 0 1-1.2 3.8 6.6 6.6 0 0 1-3.8 1.2" />
    </svg>
  );
}
