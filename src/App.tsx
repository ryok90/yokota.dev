import { VStack } from '@chakra-ui/react';
import { ExperienceSection } from './components/ExperienceSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { MainSection } from './components/MainSection';
import { SkillsSection } from './components/SkillsSection';

function App() {
  return (
    <VStack bgColor={'custom.dark'} w="100%" spacing='28'>
      <Header />
      <MainSection />
      <SkillsSection />
      <ExperienceSection />
      <Footer />
    </VStack>
  );
}

export default App;
