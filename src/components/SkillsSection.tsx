import {
  Box,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import { Carousel } from './Carousel';
import { Section } from './Section';

type WhatIDoProps = { opacity?: number };
const WhatIDo = ({ opacity = 1 }: WhatIDoProps) => (
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
  background: Record<string, string>;
};
const SkillCard = ({ title, description, background }: SkillCardProps) => (
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

const upperGradient =
  'linear-gradient(180deg, rgba(249, 249, 249, 0.04) 0.06%, rgba(249, 249, 249, 0) 135%)';
const lowerGradient =
  'linear-gradient(180deg, rgba(249, 249, 249, 0.0116) 0.87%, rgba(249, 249, 249, 0) 80%)';
const mobileGradient =
  'linear-gradient(180deg, rgba(249, 249, 249, 0.04) 0.06%, rgba(249, 249, 249, 0) 100%);';
const cardsProps = [
  {
    title: 'Back-end',
    description:
      'Experience with serverless, micro-services, monolithics, SQL and NoSQL, event-driven, clean architecture, etc.',
    background: { base: mobileGradient, lg: upperGradient },
  },
  {
    title: 'Mobile Apps',
    description:
      'Working with Flutter and React Native gave me a deep perspective on mobile app development.',
    background: { base: mobileGradient, lg: upperGradient },
  },
  {
    title: 'Front-end',
    description:
      'Going from raw CSS to pre-built styling libraries, from SPA to SSR, my toolkit is wide.',
    background: { base: mobileGradient, lg: lowerGradient },
  },
  {
    title: 'SRE',
    description:
      'Increasing knowledge of cloud providers and infrastructure to architect better solutions.',
    background: { base: mobileGradient, lg: lowerGradient },
  },
];

export const SkillsSection = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Section px={{ base: 9, md: 0 }}>
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        spacing={{ base: 0, lg: 14, xl: 28 }}
      >
        <VStack spacing="0" display={{ base: 'none', lg: 'flex' }}>
          <WhatIDo />
          <WhatIDo opacity={0.2} />
          <WhatIDo opacity={0.1} />
          <WhatIDo opacity={0.05} />
          <WhatIDo opacity={0.01} />
        </VStack>
        {isMobile ? (
          <Carousel>
            {cardsProps.map((props) => (
              <SkillCard {...props} key={props.title} />
            ))}
          </Carousel>
        ) : (
          <SimpleGrid columns={2} spacing="7" justifyItems="center">
            {cardsProps.map((props) => (
              <SkillCard {...props} key={props.title} />
            ))}
          </SimpleGrid>
        )}
      </Stack>
    </Section>
  );
};
