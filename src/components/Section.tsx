import { Center, CenterProps } from '@chakra-ui/react';

export const Section: React.FC<CenterProps> = ({
  children,
  w = '100%',
  maxW = '1360px',
  px = '72px',
  py = '28px',
  ...rest
}) => (
  <Center w={w} maxW={maxW} px={px} py={py} {...rest}>
    {children}
  </Center>
);