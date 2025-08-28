import { Header } from '@/components/Header';
import { ContactIcon, GitHubIcon, InstagramIcon, LinkedInIcon, XIcon } from '@/components/Icons';
import { Box, Center, Link, Text, VStack } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';

interface LinkItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  description: string;
  isDownload?: boolean;
}

const LinkItem = ({ href, icon, label, description, isDownload }: LinkItemProps) => (
  <Link
    href={href}
    target={isDownload ? undefined : '_blank'}
    rel={isDownload ? undefined : 'noopener noreferrer'}
    w='100%'
    maxW='400px'
  >
    <Box
      bg='custom.dark'
      border='1px solid'
      borderColor='custom.lightDark'
      borderRadius='16px'
      p={{ base: '4', md: '6' }}
      display='flex'
      alignItems='center'
      gap='4'
      w='100%'
      _hover={{
        transform: 'translateY(-2px)',
        boxShadow: '0 4px 20px rgba(0, 217, 192, 0.2)',
      }}
      transition='all 0.3s ease'
    >
      <Box flexShrink={0}>{icon}</Box>
      <Box>
        <Text color='custom.light' fontSize='lg' fontWeight='600' mb='1'>
          {label}
        </Text>
        <Text color='custom.lighterDark' fontSize='sm'>
          {description}
        </Text>
      </Box>
    </Box>
  </Link>
);

export default function LinksPage() {
  const diameter = { base: 28, sm: 32, md: 36, lg: 40 };
  const links = [
    {
      href: '/api/contact',
      icon: <ContactIcon />,
      label: 'Contact',
      description: 'Add me to your contacts',
    },
    {
      href: 'https://www.linkedin.com/in/rodrigo-yokota/',
      icon: <LinkedInIcon />,
      label: 'LinkedIn',
      description: 'Professional network',
    },
    {
      href: 'https://github.com/ryok90',
      icon: <GitHubIcon />,
      label: 'GitHub',
      description: 'Check out my projects',
    },
    {
      href: 'https://www.instagram.com/rodrigo.yokota/',
      icon: <InstagramIcon />,
      label: 'Instagram',
      description: 'Life aside coding',
    },
    {
      href: 'https://x.com/ryok90',
      icon: <XIcon />,
      label: 'X (Twitter)',
      description: 'Tech thoughts and updates',
    },
  ];

  return (
    <VStack
      minH='100vh'
      bgColor='custom.background'
      p={{ base: '4', md: '8' }}
      pt='0'
      spacing={{ base: '6', md: '8' }}
      align='center'
      justify='center'
    >
      <Head>
        <title>Links - Rodrigo Yokota</title>
        <meta
          name='description'
          content='Connect with Rodrigo Yokota on social media and professional platforms'
        />
      </Head>
      <Header />
      <VStack spacing='2' textAlign='center'>
        <Center
          minW={diameter}
          w={diameter}
          h={diameter}
          borderRadius='full'
          overflow='hidden'
          pos='relative'
        >
          <Image src='/images/rodrigo-yokota.webp' alt='Rodrigo Yokota' fill />
        </Center>
        <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight='bold' color='custom.main'>
          Rodrigo Yokota
        </Text>
        <Text color='custom.lighterDark' fontSize={{ base: 'md', md: 'lg' }} maxW='400px' px='4'>
          Software Engineer passionate about building great products
        </Text>
      </VStack>

      <VStack spacing='4' w='100%' align='center'>
        {links.map((link) => (
          <LinkItem
            key={link.label}
            href={link.href}
            icon={link.icon}
            label={link.label}
            description={link.description}
            isDownload={link.label === 'Contact'}
          />
        ))}
      </VStack>
    </VStack>
  );
}
