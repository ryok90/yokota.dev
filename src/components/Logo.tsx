import { Text } from '@chakra-ui/react';
import Link from 'next/link';

type LogoProps = { responsive?: boolean };

export const Logo = ({ responsive = false }: LogoProps) => (
  <Link href='/'>
    <Text
      as='span'
      fontWeight='bold'
      fontSize={responsive ? { base: 'md', lg: '2xl' } : '2xl'}
      _hover={{ opacity: 0.7 }}
      color='custom.main'
    >
      yokota
      <Text as='span' color='custom.light'>
        .dev
      </Text>
    </Text>
  </Link>
);
