import { Center, Stack, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import { Section } from '../Section';
import { Typewriter } from './Typewriter';

const diameter = { base: 32, sm: 40, md: 44, lg: 52 };

export const MainSection = () => (
  <Section as="main" px="12">
    <Stack
      w="100%"
      direction={{ base: 'column', lg: 'row' }}
      justifyContent="center"
      alignItems="center"
      spacing={{ base: 10, lg: 28 }}
    >
      <Center
        minW={diameter}
        w={diameter}
        h={diameter}
        borderRadius="full"
        overflow="hidden"
        pos="relative"
      >
        <Image src="/images/rodrigo-yokota.webp" alt="Rodrigo Yokota" fill />
      </Center>
      <VStack maxW="34rem" alignItems={{ base: 'center', lg: 'start' }}>
        <Text color="white" as="h1" fontSize={{ base: '2xl', md: '5xl' }}>
          Hi, I&apos;m{' '}
          <Text as="span" color="custom.main">
            Rodrigo Yokota
          </Text>
          !
        </Text>
        <Text
          fontFamily={'Inter, Electrolize'}
          fontSize={{ base: 'md', md: '2xl' }}
          textAlign={{ base: 'center', lg: 'start' }}
        >
          I am a full-stack software engineer, developing awesome web and mobile
          applications since 2018. Forever learning and improving skills.
        </Text>
        <Typewriter />
      </VStack>
    </Stack>
  </Section>
);
