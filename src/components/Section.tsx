import { Center, CenterProps } from '@chakra-ui/react';

export const Section: React.FC<CenterProps> = ({
  children,
  as = 'section',
  w = '100%',
  maxW = '5xl',
  ...rest
}) => (
  <Center as={as} w={w} maxW={maxW} {...rest}>
    {children}
  </Center>
);
