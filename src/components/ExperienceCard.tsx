import {
  Box,
  Divider,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';

type ExperienceCardProps = {
  logoAlt: string;
  logoSrc: string;
  jobTitle: string;
  period: string;
  description: string;
  techs: string[];
  href: string;
};

export const ExperienceCard = ({
  logoAlt,
  logoSrc,
  jobTitle,
  period,
  description,
  techs,
  href,
}: ExperienceCardProps) => (
  <VStack
    justifyContent="space-between"
    bgColor="custom.lighterDark"
    borderRadius="2xl"
    maxW="5xl"
    w="100%"
    px="20"
    pb="8"
    h="60"
  >
    <HStack w="100%" justifyContent="space-between" mt="10">
      <VStack alignItems="start" spacing={0}>
        <Link href={href} target="_blank" rel="noopener">
          <Image src={logoSrc} pb="2" alt={logoAlt} _hover={{ opacity: 0.7 }} />
        </Link>
        <Text as="h3" fontSize="2xl" color="custom.main">
          {jobTitle}
        </Text>
        <Text fontFamily="secondary" fontSize="sm" mt="0">
          {period}
        </Text>
      </VStack>
      <HStack h="100%">
        <Divider orientation="vertical" h="80%" mr="16" borderColor="#D9D9D9" />
        <Text fontFamily="secondary" maxW="md">
          {description}
        </Text>
      </HStack>
    </HStack>
    <HStack
      as="ul"
      divider={<>&bull;</>}
      listStyleType="none"
      justifyContent="space-between"
      fontSize="xs"
      fontFamily="secondary"
      color="white"
      w="100%"
    >
      {techs.map((tech, index) => (
        <Box as="li" key={`${index + tech}`}>
          {tech}
        </Box>
      ))}
    </HStack>
  </VStack>
);
