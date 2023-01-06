import { HStack, Link, Text } from '@chakra-ui/react';
import { Section } from './Section';

export const Footer = () => (
  <Section
    as="footer"
    w="100%"
    maxW="none"
    bgColor="#151515"
    h="14"
    py="0"
    fontFamily="secondary"
    fontSize="xs"
  >
    <HStack w="100%" maxW="5xl" justifyContent="end" alignItems="center">
      <Text>
        Designed by{' '}
        <Link
          _hover={{ color: 'custom.main' }}
          target="_blank"
          href="https://www.linkedin.com/in/guyllian-kanashima-sasano-95b8b715a/"
        >
          Guyllian Kanashima
        </Link>
      </Text>
      <Text>|</Text>
      <Text>
        Developed by{' '}
        <Link
          _hover={{ color: 'custom.main' }}
          target="_blank"
          href="https://github.com/ryok90/yokota.dev"
        >
          Rodrigo Yokota
        </Link>
      </Text>
    </HStack>
  </Section>
);
