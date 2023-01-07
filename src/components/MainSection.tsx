import { Flex, HStack, Text, VStack } from '@chakra-ui/react';
import { Section } from './Section';
import { Typewriter } from './Typewriter';

export const MainSection = () => (
  <Section as="main">
    <HStack w="100%" flexDirection="row" justifyContent="center" spacing="28">
      <Flex
        minW="52"
        w="52"
        h="52"
        borderRadius="full"
        overflow="hidden"
        background="url('/images/rodrigo-yokota.webp') bottom/contain no-repeat"
        backgroundColor="custom.main"
      />
      <VStack maxW="34rem" alignItems="start">
        <Text color="white" as="h1" fontSize="5xl">
          Hello, I'm{' '}
          <Text as="span" color="custom.main">
            Rodrigo
          </Text>
          !
        </Text>
        <Text fontFamily={'Inter, Electrolize'} fontSize="2xl">
          I am a full-stack software engineer, developing awesome web and mobile
          applications since 2018. Forever learning and improving skills.
        </Text>
        <Typewriter />
      </VStack>
    </HStack>
  </Section>
);
