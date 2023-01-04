import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import { Header } from './components/Header';
import { MainSection } from './components/MainSection';
import { Section } from './components/Section';
import { SkillsSection } from './components/SkillsSection';

function App() {
  return (
    <VStack bgColor={'custom.dark'} w="100%">
      <Header />
      <Box as="main">
        <MainSection />
        <SkillsSection />
      </Box>
    </VStack>
  );
}

export default App;
