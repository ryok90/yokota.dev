import { Box, HStack, Text } from '@chakra-ui/react';
import { Section } from './Section';

export const Header = () => (
  <Section>
    <HStack w="100%" justifyContent="space-between">
      <Text fontSize="2xl" color="font.bright">
        yokota
        <Text as="span" color="font.default">
          .dev
        </Text>
      </Text>
      <Box></Box>
    </HStack>
  </Section>
);
