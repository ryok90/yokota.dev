import { HStack, Text } from '@chakra-ui/react';
import { Section } from './Section';

export const Header = () => (
  <Section as="header" pb="0">
    <HStack w="100%" justifyContent="center">
      <Text as="h1" fontSize="2xl" color="custom.main">
        yokota
        <Text as="span" color="custom.light">
          .dev
        </Text>
      </Text>
    </HStack>
  </Section>
);
