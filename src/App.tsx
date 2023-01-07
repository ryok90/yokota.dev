import { Box, HStack, VStack } from '@chakra-ui/react';
import { ExperienceSection } from './components/ExperienceSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Links } from './components/Links';
import { MainSection } from './components/MainSection';
import { SkillsSection } from './components/SkillsSection';

function App() {
  return (
    <VStack bgColor={'custom.dark'} w="100%" spacing="40">
      <Header />
      <HStack w="100%" alignItems="start" justifyContent="center">
        <VStack
          spacing="6"
          position="sticky"
          top="8"
          w="6"
          mt="3rem"
          mr="12"
          display={{ base: 'none', xl: 'flex' }}
        >
          <Links />
        </VStack>
        <VStack w="100%" maxW="5xl" spacing="12.5rem">
          <MainSection />
          <SkillsSection />
          <ExperienceSection />
        </VStack>
        {/* Replicate <Links /> width */}
        <Box w="4.5rem" display={{ base: 'none', xl: 'block' }} />
      </HStack>
      <Footer />
    </VStack>
  );
}

export default App;
