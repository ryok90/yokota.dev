import { Center, CenterProps } from '@chakra-ui/react';

export const Section = ({
  children,
  as = 'section',
  w = '100%',
  maxW = '5xl',
  ...rest
}: CenterProps) => (
  <Center as={as} w={w} maxW={maxW} {...rest}>
    {children}
  </Center>
);
