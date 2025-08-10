import React from "react";
import { LucideProps } from "lucide-react";

export const XIcon = React.forwardRef<SVGSVGElement, LucideProps>(
  ({ size = 24, className = "", ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M14.287 10.157l8.174-9.58H20.55l-6.168 7.22L8.316 0.577H0l8.73 12.69L0 23.423h2.911l6.168-7.22 6.066 7.22h8.174L14.287 10.157zM9.207 14.85l-0.543-0.776L2.911 2.25h3.434l4.862 6.96 0.543 0.776 4.862-6.96h3.434l-5.734 11.824z"/>
    </svg>
  )
);

XIcon.displayName = "XIcon"; 