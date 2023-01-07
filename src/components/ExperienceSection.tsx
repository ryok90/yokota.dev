import { Text, VStack } from '@chakra-ui/react';
import { ExperienceCard } from './ExperienceCard';
import { Section } from './Section';

export const ExperienceSection = () => (
  <Section display="flex" flexDirection="column" alignItems="start">
    <Text as="h2" fontSize="5xl" color="custom.main" mb="10">
      Work experience
    </Text>
    <VStack spacing="7" w="100%">
      <ExperienceCard
        logoAlt="Groundbreaker"
        logoSrc="/images/groundbreaker.webp"
        href="https://www.groundbreaker.co/"
        jobTitle="Software Engineer"
        period="Dec/2021 - Present"
        description="Developing new features as well as migrating legacy structures taking full advantage of our cloud provider's solutions. Assisting in decision making process and helping organize implementaions."
        techs={'Node.js,Serverless,Nx,Micro-services,Micro-frontends,Module Federation,ReactJS,Typescript,Javascript,DynamoDB'.split(
          ','
        )}
      />
      <ExperienceCard
        logoAlt="Gazin Tech"
        logoSrc="/images/gazin.webp"
        href="https://www.gazintech.com.br/"
        jobTitle="Full-stack Developer"
        period="Sep/2020 - Nov/2021"
        description="Participated in the development of the new e-commerce mobile app and improved the e-commerce web app. Took point in the development of an integrating micro-service to calculate shipping costs and notify updates."
        techs={'Node.js,NestJS,Express.js,Clean Architecture,React.js,Typescript,Javascript,Next.js,PHP,Laravel,PostgreSQL'.split(
          ','
        )}
      />
      <ExperienceCard
        logoAlt="Vivaweb"
        logoSrc="/images/vivaweb.webp"
        href="https://www.vivaweb.net/"
        jobTitle="Full-stack Developer"
        period="May/2019 - Sep/2020"
        description="Developed new features and maintained the existing ones for the main product (corporative intranet) as well as started the new version of the mobile app using a multi-platform framework."
        techs={'PHP,Zend Framework,Flutter,Docker,Bootstrap,Bitbucket,MySQL,Javascript,HTML,CSS,Apache'.split(
          ','
        )}
      />
    </VStack>
  </Section>
);
