import { Center, HStack, Link, Stack, Text } from '@chakra-ui/react';
import { Logo } from './Logo';

export const Footer = () => (
  <Center
    as="footer"
    w="100%"
    maxW="none"
    bgColor="#151515"
    h={{ base: 'auto', md: 14 }}
    py={{ base: 3, md: 0 }}
  >
    <Stack
      direction={{ base: 'column', md: 'row' }}
      w="100%"
      maxW="5xl"
      justifyContent={{ base: 'center', md: 'space-between' }}
      alignItems="center"
      spacing="2"
    >
      <Logo responsive />
      <HStack
        w="100%"
        maxW="5xl"
        justifyContent={{ base: 'center', md: 'end' }}
        alignItems="center"
        fontSize={{ base: '0.6125rem', md: 'xs' }}
        fontFamily="secondary"
      >
        <Text>
          Designed by{' '}
          <Link
            _hover={{ color: 'custom.main' }}
            target="_blank"
            rel="noopener"
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
            rel="noopener"
            href="https://github.com/ryok90/yokota.dev"
          >
            Rodrigo Yokota
          </Link>
        </Text>
      </HStack>
    </Stack>
  </Center>
);
