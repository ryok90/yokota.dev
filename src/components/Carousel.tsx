import { Box, HStack, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';

type CarouselProps = { children: React.ReactNode[] };

export const Carousel = ({ children }: CarouselProps) => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateActive = (value: number) => {
    if (value < 0) return;
    if (value > children.length - 1) return setActive(0);
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
        {children.map((child, index) => (
          <Box mx="1.125rem" key={index}>
            {child}
          </Box>
        ))}
      </Box>
      <HStack spacing="4">
        {children.map((_, index) => (
          <Box
            as="button"
            key={index}
            onClick={() => setActive(index)}
            w="2"
            h="2"
            borderRadius="full"
            bgColor={
              active === index ? 'custom.lighterDark' : 'custom.lightDark'
            }
          />
        ))}
      </HStack>
    </VStack>
  );
};
