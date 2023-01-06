import { Center, CenterProps } from '@chakra-ui/react';

export const Section: React.FC<CenterProps> = ({
  children,
  as = 'section',
  w = '100%',
  maxW = '85rem',
  px = '4.5rem',
  py = '1.75rem',
  ...rest
}) => (
  <Center as={as} w={w} maxW={maxW} px={px} py={py} {...rest}>
    {children}
  </Center>
);
