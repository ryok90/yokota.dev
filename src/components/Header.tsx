import { Box, HStack, Text } from '@chakra-ui/react';
import { Section } from './Section';

export const Header = () => (
  <Section>
    <HStack w="100%" justifyContent="center">
      <Text fontSize="2xl" color="custom.main">
        yokota
        <Text as="span" color="custom.light">
          .dev
        </Text>
      </Text>
    </HStack>
  </Section>
);
