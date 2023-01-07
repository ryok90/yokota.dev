import { Link, Text } from '@chakra-ui/react';

export const Logo = () => (
  <Link
    href="https://yokota.dev"
    fontSize="2xl"
    color="custom.main"
    _hover={{ opacity: 0.7 }}
  >
    yokota
    <Text as="span" color="custom.light">
      .dev
    </Text>
  </Link>
);
