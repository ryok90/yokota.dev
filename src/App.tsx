import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import { Header } from './components/Header';
import { Section } from './components/Section';

function App() {
  return (
    <VStack bgColor={'background.dark'} w="100%">
      <Header />
    </VStack>
  );
}

export default App;
