import { Box, Text, VStack } from '@chakra-ui/react';
import { ExperienceCard } from './ExperienceCard';
import { DownloadIcon } from './Icons/DownloadIcon';
import { Section } from './Section';

export const ExperienceSection = () => (
  <Section
    display="flex"
    flexDirection="column"
    alignItems={{ base: 'center', lg: 'start' }}
    px={{ base: 9, xl: 0 }}
  >
    <Text
      as="h2"
      fontSize={{ base: '1.75rem', lg: '5xl' }}
      color="custom.main"
      mb={{ base: 8, xl: 10 }}
    >
      Work experience
    </Text>
    <VStack spacing={{ base: 4, md: 7 }} w="100%">
      <ExperienceCard
        logoHeight={{ base: '1rem', md: '1.25rem' }}
        logoAlt="Groundbreaker"
        logoSrc="/images/groundbreaker.webp"
        href="https://www.linkedin.com/company/groundbreakerco/"
        jobTitle="Software Engineer"
        period="Dec/2021 - Present"
        description="Developing new features as well as migrating legacy structures taking full advantage of our cloud provider's solutions. Assisting in decision making process and helping organize implementations."
        techs={'Node.js,Serverless,Nx,Micro-services,Micro-frontends,Module Federation,ReactJS,Typescript,Javascript,DynamoDB'.split(
          ','
        )}
      />
      <ExperienceCard
        logoHeight={{ base: '1.15rem', md: '1.438rem' }}
        logoAlt="Gazin Tech"
        logoSrc="/images/gazin.webp"
        href="https://www.linkedin.com/company/gazin-tech/"
        jobTitle="Full-stack Developer"
        period="Sep/2020 - Nov/2021"
        description="Participated in the development of the new e-commerce mobile app and improved the e-commerce web app. Took point in the development of an integrating micro-service to calculate shipping costs and notify updates."
        techs={'Node.js,NestJS,Express.js,Clean Architecture,React.js,Typescript,Javascript,Next.js,PHP,Laravel,PostgreSQL'.split(
          ','
        )}
      />
      <ExperienceCard
        logoHeight={{ base: '1.25rem', md: '1.625rem' }}
        logoAlt="Vivaweb"
        logoSrc="/images/vivaweb.webp"
        href="https://www.linkedin.com/company/vivaweb/"
        jobTitle="Full-stack Developer"
        period="May/2019 - Sep/2020"
        description="Developed new features and maintained the existing ones for the main product (corporative intranet) as well as started the new version of the mobile app using a multi-platform framework."
        techs={'PHP,Zend Framework,Flutter,Docker,Bootstrap,Bitbucket,MySQL,Javascript,HTML,CSS,Apache'.split(
          ','
        )}
      />
    </VStack>
    <Box
      as="a"
      href="https://drive.google.com/uc?export=download&id=1Q_JRCt0mZmhP7ieBWEMdeMBt8gAwfTA8"
      borderRadius="lg"
      px="6"
      py="3"
      mt="8"
      alignSelf={{ base: 'center', lg: 'end' }}
      _hover={{ color: 'custom.main' }}
      fontSize={{ base: 'md', lg: 'xl' }}
      bgColor="custom.dark"
    >
      <DownloadIcon mr="3" />
      Download Resume
    </Box>
  </Section>
);
