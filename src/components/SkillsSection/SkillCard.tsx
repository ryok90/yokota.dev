import { Box, Text } from '@chakra-ui/react';

export type SkillCardProps = {
  title: string;
  description: string;
  background: Record<string, string>;
};

export const SkillCard = ({
  title,
  description,
  background,
}: SkillCardProps) => (
  <Box
    background={background}
    borderRadius="2xl"
    minW="72"
    w="72"
    h="48"
    p={{ base: 6, lg: 7 }}
  >
    <Text as="h3" color="custom.main" fontSize={{ base: '1.5rem', md: '2rem' }}>
      {title}
    </Text>
    <Text fontFamily="secondary" whiteSpace="normal">
      {description}
    </Text>
  </Box>
);
