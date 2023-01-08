import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Divider,
  HStack,
  Image,
  Link,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';

export type ExperienceCardProps = {
  logoAlt: string;
  logoSrc: string;
  logoHeight: Record<string, string>;
  jobTitle: string;
  period: string;
  description: string;
  techs: string[];
  href: string;
};

export const ExperienceCard = ({
  logoAlt,
  logoSrc,
  logoHeight,
  jobTitle,
  period,
  description,
  techs,
  href,
}: ExperienceCardProps) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const logoComp = (
    <Image h={logoHeight} src={logoSrc} mb={{ base: 0, md: 2 }} alt={logoAlt} />
  );

  const titleComp = (
    <>
      <Text as="h3" fontSize={{ base: 'xl', lg: '2xl' }} color="custom.main">
        {jobTitle}
      </Text>
      <Text fontFamily="secondary" fontSize={{ base: 'xs', lg: 'sm' }} mt="0">
        {period}
      </Text>
    </>
  );

  const descriptionComp = (
    <Text fontFamily="secondary" maxW={{ base: 'none', md: 'md' }}>
      {description}
    </Text>
  );

  const techsComp = (
    <HStack
      as="ul"
      display={{ base: 'flex', md: 'none', lg: 'flex' }}
      flexWrap={{ base: 'wrap', md: 'nowrap' }}
      divider={isMobile ? undefined : <>&nbsp;&bull;&nbsp;</>}
      listStyleType="none"
      justifyContent="space-between"
      fontSize="xs"
      fontFamily="secondary"
      color="white"
      spacing="0"
      w={{ base: '90%', lg: '100%' }}
    >
      {techs.map((tech, index) => (
        <Box as="li" key={`${index + tech}`} pr="2" lineHeight="8">
          {tech}
        </Box>
      ))}
    </HStack>
  );

  if (isMobile)
    return (
      <Accordion allowMultiple={true} w="100%">
        <AccordionItem
          border="none"
          bgColor="custom.dark"
          borderRadius="2xl"
          px="3"
          py="5"
        >
          {({ isExpanded }) => (
            <>
              <h3>
                <AccordionButton display="flex" justifyContent="space-between">
                  {logoComp}
                  {isExpanded ? (
                    <MinusIcon fontSize="sm" />
                  ) : (
                    <AddIcon fontSize="sm" />
                  )}
                </AccordionButton>
              </h3>
              <AccordionPanel pt="8" pb="0">
                <Box mb="4">{titleComp}</Box>
                <Box mb="8">{descriptionComp}</Box>
                {techsComp}
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    );

  return (
    <VStack
      justifyContent="space-between"
      bgColor="custom.dark"
      borderRadius="2xl"
      maxW="5xl"
      w="100%"
      px={{ base: 8, lg: 10, xl: 20 }}
      pt={{ base: 5, lg: 7, xl: 10 }}
      pb={{ base: 5, xl: 8 }}
      h={{ base: 'auto', lg: 48, xl: 60 }}
    >
      <HStack w="100%" justifyContent="space-between">
        <VStack
          minW="16.25rem"
          alignItems="start"
          spacing={0}
          mr={{ base: 6, lg: 8 }}
        >
          <Link
            href={href}
            target="_blank"
            rel="noopener"
            _hover={{ opacity: 0.7 }}
          >
            {logoComp}
          </Link>
          {titleComp}
        </VStack>
        <HStack h="100%">
          <Divider
            display={{ base: 'none', lg: 'block' }}
            orientation="vertical"
            h="80%"
            mr={{ base: 8, xl: 16 }}
            borderColor="#D9D9D9"
          />
          {descriptionComp}
        </HStack>
      </HStack>
      {techsComp}
    </VStack>
  );
};
