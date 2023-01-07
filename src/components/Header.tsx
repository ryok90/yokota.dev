import { Center, HStack } from '@chakra-ui/react';
import { Links } from './Links';
import { Logo } from './Logo';

export const Header = () => (
  <Center w="100%" px="9">
    <HStack
      w="100%"
      maxW="5xl"
      as="header"
      pt="1.75rem"
      justifyContent={{ base: 'space-between', xl: 'center' }}
    >
      <Logo />
      <HStack spacing="4" display={{ base: 'flex', xl: 'none' }}>
        <Links />
      </HStack>
    </HStack>
  </Center>
);
