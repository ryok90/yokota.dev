import { Link, Text } from '@chakra-ui/react';

type LogoProps = { responsive?: boolean };

export const Logo = ({ responsive = false }: LogoProps) => (
  <Link
    href="https://yokota.dev"
    fontSize={responsive ? { base: 'md', lg: '2xl' } : '2xl'}
    color="custom.main"
    _hover={{ opacity: 0.7 }}
  >
    yokota
    <Text as="span" color="custom.light">
      .dev
    </Text>
  </Link>
);
