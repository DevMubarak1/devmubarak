import React from "react";
import { LucideProps } from "lucide-react";

export const XIcon = React.forwardRef<SVGSVGElement, LucideProps>(
  ({ size = 24, className = "", ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  )
);

XIcon.displayName = "XIcon"; 