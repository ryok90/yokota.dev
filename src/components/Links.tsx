import { Link, VStack } from '@chakra-ui/react';
import { EmailIcon } from './Icons/EmailIcon';
import { GitHubIcon } from './Icons/GitHubIcon';
import { LinkedInIcon } from './Icons/LinkedInIcon';

export const Links = () => (
  <VStack spacing="6" position="sticky" top="8" w="6" mt="7.5rem">
    <Link href="mailto:rodrigo@yokota.dev" _hover={{ opacity: 0.6 }}>
      <EmailIcon />
    </Link>
    <Link
      href="https://www.linkedin.com/in/rodrigo-yokota/"
      target="_blank"
      _hover={{ opacity: 0.6 }}
    >
      <LinkedInIcon />
    </Link>
    <Link
      href="https://github.com/ryok90"
      target="_blank"
      _hover={{ opacity: 0.6 }}
    >
      <GitHubIcon />
    </Link>
  </VStack>
);
