import { Box, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useState } from 'react';
import { EmailIcon, GitHubIcon, LinkedInIcon, LinksIcon } from './Icons';

export const Links = () => {
  // E-mail obfuscation from crawlers
  const [focus, setFocus] = useState(false);
  const email = 'rodrigo@yokota.dev';

  function handleFocus() {
    setFocus(true);
  }

  return (
    <>
      <Link
        href={focus ? `mailto:${email}` : '#'}
        _hover={{ opacity: 0.6 }}
        onMouseOver={handleFocus}
        onFocus={handleFocus}
        aria-label='Email'
      >
        <EmailIcon />
      </Link>
      <Link
        href='https://www.linkedin.com/in/rodrigo-yokota/'
        target='_blank'
        rel='noopener'
        _hover={{ opacity: 0.6 }}
        aria-label='Linkedin'
      >
        <LinkedInIcon />
      </Link>
      <Link
        href='https://github.com/ryok90'
        target='_blank'
        rel='noopener'
        _hover={{ opacity: 0.6 }}
        aria-label='GitHub'
      >
        <GitHubIcon />
      </Link>
      <NextLink href='/links' aria-label='All Links'>
        <Box _hover={{ opacity: 0.6 }}>
          <LinksIcon />
        </Box>
      </NextLink>
    </>
  );
};
