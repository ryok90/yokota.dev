import { HStack, Link, Text } from '@chakra-ui/react';
import { Section } from './Section';

export const Header = () => (
  <Section as="header" pb="0">
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
  </Section>
);
