import { twMerge } from "tailwind-merge";

import { iconSizeToClassName } from "./theme";
import { IconProps } from "./types";

export const TrendUpIcon = ({ size, className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className={twMerge(iconSizeToClassName[size], className)}
    >
      <path d="M10.6667 5.33332C10.175 5.33332 9.77779 4.9361 9.77779 4.44443C9.77779 3.95276 10.175 3.55554 10.6667 3.55554H15.1111C15.6028 3.55554 16 3.95276 16 4.44443V8.88888C16 9.38054 15.6028 9.77776 15.1111 9.77776C14.6195 9.77776 14.2222 9.38054 14.2222 8.88888V6.59165L9.51667 11.2944C9.16945 11.6417 8.60556 11.6417 8.25834 11.2944L5.33334 8.36943L1.51667 12.1833C1.16945 12.5305 0.605564 12.5305 0.258341 12.1833C-0.0888807 11.8361 -0.0888807 11.2722 0.258341 10.925L4.70279 6.48054C5.05001 6.13332 5.6139 6.13332 5.96112 6.48054L8.8889 9.40832L12.9639 5.33332H10.6667Z" />
    </svg>
  );
};