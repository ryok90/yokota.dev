import { ExperienceSection } from '@/components/ExperienceSection';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Links } from '@/components/Links';
import { MainSection } from '@/components/MainSection';
import { SkillsSection } from '@/components/SkillsSection';
import { Box, HStack, VStack } from '@chakra-ui/react';
import Head from 'next/head';

export default function Home() {
  return (
    <VStack
      bgColor={'custom.background'}
      w="100%"
      spacing={{ base: 20, lg: 40 }}
    >
      <Head>
        <title>Rodrigo Yokota - Software Engineer</title>
      </Head>
      <Header />
      <HStack w="100%" alignItems="start" justifyContent="center" spacing="0">
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
        <VStack w="100%" maxW="5xl" spacing={{ base: 14, lg: '12.5rem' }}>
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
