import {
  SimpleGrid,
  Stack,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import { Carousel } from '../Carousel';
import { Section } from '../Section';
import { cardsProps } from './consts';
import { SkillCard } from './SkillCard';
import { WhatIDo } from './WhatIDo';

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
            {cardsProps.map((props, index) => (
              <SkillCard {...props} key={index} />
            ))}
          </Carousel>
        ) : (
          <SimpleGrid columns={2} spacing="7" justifyItems="center">
            {cardsProps.map((props, index) => (
              <SkillCard {...props} key={index} />
            ))}
          </SimpleGrid>
        )}
      </Stack>
    </Section>
  );
};