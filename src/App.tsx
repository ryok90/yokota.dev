import { Box, HStack, VStack } from '@chakra-ui/react';
import { ExperienceSection } from './components/ExperienceSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Links } from './components/Links';
import { MainSection } from './components/MainSection';
import { SkillsSection } from './components/SkillsSection';

function App() {
  return (
    <VStack bgColor={'custom.dark'} w="100%" spacing="28">
      <Header />
      <HStack w="100%" alignItems='start' justifyContent='center'>
        <Links />
        <VStack spacing="28">
          <MainSection />
          <SkillsSection />
          <ExperienceSection />
        </VStack>
        <Box w='6' />
      </HStack>
      <Footer />
    </VStack>
  );
}

export default App;
