import { Box, Center, HStack, VStack } from '@chakra-ui/react';
import { ExperienceSection } from './components/ExperienceSection';
import { Footer } from './components/Footer';
import { Links } from './components/Links';
import { Logo } from './components/Logo';
import { MainSection } from './components/MainSection';
import { SkillsSection } from './components/SkillsSection';

function App() {
  return (
    <VStack bgColor={'custom.dark'} w="100%" spacing="40">
      <Center as="header" pt="1.75rem">
        <Logo />
      </Center>
      <HStack w="100%" alignItems="start" justifyContent="center">
        <Links />
        <VStack w="100%" maxW="5xl" spacing="12.5rem">
          <MainSection />
          <SkillsSection />
          <ExperienceSection />
        </VStack>
        <Box w="4.5rem" />
      </HStack>
      <Footer />
    </VStack>
  );
}

export default App;
