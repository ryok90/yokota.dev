import { Box, Text, VStack } from '@chakra-ui/react';
import { ExperienceCard } from './ExperienceCard';
import { DownloadIcon } from '../Icons';
import { Section } from '../Section';
import { experiences } from './consts';

export const ExperienceSection = () => (
  <Section
    display="flex"
    flexDirection="column"
    alignItems={{ base: 'center', lg: 'start' }}
    px={{ base: 9, xl: 0 }}
  >
    <Text
      as="h2"
      fontSize={{ base: '1.75rem', lg: '5xl' }}
      color="custom.main"
      mb={{ base: 8, xl: 10 }}
    >
      Work experience
    </Text>
    <VStack spacing={{ base: 4, md: 7 }} w="100%">
      {experiences.map((props, index) => (
        <ExperienceCard {...props} key={index} />
      ))}
    </VStack>
    <Box
      as="a"
      href="https://drive.google.com/uc?export=download&id=1Q_JRCt0mZmhP7ieBWEMdeMBt8gAwfTA8"
      borderRadius="lg"
      px="6"
      py="3"
      mt="8"
      alignSelf={{ base: 'center', lg: 'end' }}
      _hover={{ color: 'custom.main' }}
      fontSize={{ base: 'md', lg: 'xl' }}
      bgColor="custom.dark"
    >
      <DownloadIcon mr="3" />
      Download Resume
    </Box>
  </Section>
);
