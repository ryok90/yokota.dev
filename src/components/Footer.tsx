import { Center, HStack, Link, Text } from '@chakra-ui/react';
import { Logo } from './Logo';

export const Footer = () => (
  <Center as="footer" w="100%" maxW="none" bgColor="#151515" h="14" py="0">
    <HStack w="100%" maxW="5xl" justifyContent="space-between">
      <Logo />
      <HStack
        w="100%"
        maxW="5xl"
        justifyContent="end"
        alignItems="center"
        fontSize="xs"
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
    </HStack>
  </Center>
);
