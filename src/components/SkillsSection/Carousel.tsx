import { Box, Center, HStack, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { SkillCard, SkillCardProps } from './SkillCard';

type CarouselProps = { skills: SkillCardProps[] };

export const Carousel = ({ skills }: CarouselProps) => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateActive = (value: number) => {
    if (value < 0) return;
    if (value > skills.length - 1) return setActive(0);
    setActive(value);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => updateActive(active + 1),
    onSwipedRight: () => updateActive(active - 1),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) updateActive(active + 1);
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [active, paused]);

  return (
    <VStack
      {...handlers}
      overflow="hidden"
      maxW="97.5vw"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Box
        display="inline-flex"
        whiteSpace="nowrap"
        transition="transform 0.7s"
        transform={`translateX(${37.5 - active * 25}%)`}
        textAlign="center"
      >
        {skills.map((skillProps, index) => (
          <Box mx="1.125rem" key={index}>
            <SkillCard {...skillProps} />
          </Box>
        ))}
      </Box>
      <HStack spacing="0">
        {skills.map((skillProps, index) => (
          <Center
            as="button"
            w="6"
            h="6"
            key={index}
            onClick={() => setActive(index)}
            aria-label={skillProps.title}
          >
            <Box
              w="2"
              h="2"
              borderRadius="full"
              bgColor={
                active === index ? 'custom.lighterDark' : 'custom.lightDark'
              }
            />
          </Center>
        ))}
      </HStack>
    </VStack>
  );
};
