import { Box, Center, CenterProps } from '@chakra-ui/react';

type SectionProps = {
  children: React.ReactNode;
  maxW?: string;
};

export const Section: React.FC<CenterProps> = ({
  children,
  w = '100%',
  maxW = '1360px',
  px = '72px',
  py = '55px',
  ...rest
}) => (
  <Center w={w} maxW={maxW} px={px} py={py} {...rest}>
    {children}
  </Center>
);
