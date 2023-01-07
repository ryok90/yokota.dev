import { Icon, IconProps } from '@chakra-ui/react';

export const DownloadIcon = (iconProps: IconProps) => (
  <Icon
    width="14px"
    height="18px"
    viewBox="0 0 14 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...iconProps}
  >
    <path
      d="M1 17L13 17"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 1V13M7 13L10.5 9.5M7 13L3.5 9.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);
