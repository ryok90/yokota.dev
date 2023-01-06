import { Box, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { Section } from './Section';

type WhatIDoProps = { opacity: number };
const WhatIDo = ({ opacity }: WhatIDoProps) => (
  <Text
    color="custom.main"
    opacity={opacity}
    fontSize="4rem"
    lineHeight="4.75rem"
  >
    What I do
  </Text>
);

type SkillCardProps = {
  title: string;
  description: string;
  background: string;
};
const SkillCard = ({ title, description, background }: SkillCardProps) => (
  <Box background={background} borderRadius="2xl" maxW="72" h="48" p="7">
    <Text as="h3" color="custom.main" fontSize="2rem">
      {title}
    </Text>
    <Text fontFamily="secondary">{description}</Text>
  </Box>
);

export const SkillsSection = () => (
  <Section>
    <HStack spacing="28">
      <VStack spacing="0">
        <WhatIDo opacity={1} />
        <WhatIDo opacity={0.2} />
        <WhatIDo opacity={0.1} />
        <WhatIDo opacity={0.05} />
        <WhatIDo opacity={0.01} />
      </VStack>
      <SimpleGrid columns={2} spacing="7">
        <SkillCard
          title="Back-end"
          description="
          Experience with serverless, micro-services, monolithics, SQL and NoSQL, event-driven, clean architecture, etc."
          background="linear-gradient(180deg, rgba(249, 249, 249, 0.04) 0.06%, rgba(249, 249, 249, 0) 136.14%)"
        />
        <SkillCard
          title="Front-end"
          description="Going from raw CSS to pre-built styling libraries, from SPA to SSR, my toolkit is wide."
          background="linear-gradient(180deg, rgba(249, 249, 249, 0.04) 0.06%, rgba(249, 249, 249, 0) 136.14%)"
        />
        <SkillCard
          title="Mobile Apps"
          description="Working with Flutter and React Native gave me a deep perspective on mobile app development."
          background="linear-gradient(180deg, rgba(249, 249, 249, 0.0116) 0.87%, rgba(249, 249, 249, 0) 78.91%)"
        />
        <SkillCard
          title="SRE"
          description="Increasing knowledge of cloud providers and infrastructure to architect better solutions."
          background="linear-gradient(180deg, rgba(249, 249, 249, 0.0116) 0.87%, rgba(249, 249, 249, 0) 78.91%)"
        />
      </SimpleGrid>
    </HStack>
  </Section>
);
