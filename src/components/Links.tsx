import { Link, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { EmailIcon } from './Icons/EmailIcon';
import { GitHubIcon } from './Icons/GitHubIcon';
import { LinkedInIcon } from './Icons/LinkedInIcon';

export const Links = () => {
  // E-mail obfuscation from crawlers
  const [focus, setFocus] = useState(false);
  const email = 'rodrigo@yokota.dev';

  function handleFocus() {
    setFocus(true);
  }

  return (
    <VStack spacing="6" position="sticky" top="8" w="6" mt="3rem" mr="12">
      <Link
        href={focus ? `mailto:${email}` : '#'}
        _hover={{ opacity: 0.6 }}
        onMouseOver={handleFocus}
        onFocus={handleFocus}
      >
        <EmailIcon />
      </Link>
      <Link
        href="https://www.linkedin.com/in/rodrigo-yokota/"
        target="_blank"
        rel="noopener"
        _hover={{ opacity: 0.6 }}
      >
        <LinkedInIcon />
      </Link>
      <Link
        href="https://github.com/ryok90"
        target="_blank"
        rel="noopener"
        _hover={{ opacity: 0.6 }}
      >
        <GitHubIcon />
      </Link>
    </VStack>
  );
};
