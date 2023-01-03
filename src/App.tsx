import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import { Section } from './components/Section';

function App() {
  return (
    <VStack bgColor={'background.dark'} w="100%">
      <Section>
        <HStack w="100%" justifyContent="space-between">
          <Text fontSize="2xl" color="font.bright">
            yokota
            <Text as="span" color="font.default">
              .dev
            </Text>
          </Text>
          <Box></Box>
        </HStack>
      </Section>
    </VStack>
  );
}

export default App;
