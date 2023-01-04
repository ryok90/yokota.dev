import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import { Header } from './components/Header';
import { MainSection } from './components/MainSection';
import { Section } from './components/Section';

function App() {
  return (
    <VStack bgColor={'custom.dark'} w="100%">
      <Header />
      <Box as="main">
        <MainSection />
      </Box>
    </VStack>
  );
}

export default App;
