import { ExperienceCardProps } from './ExperienceCard';

export const experiences: ExperienceCardProps[] = [
  {
    logoHeight: { base: '1.5rem', md: '2rem' },
    logoWidth: { base: '8.53rem', md: '11.375rem' },
    logoAlt: 'Valor Software',
    logoSrc: '/images/valor.webp',
    href: 'https://www.linkedin.com/company/valor-software/',
    jobTitle: 'Senior Software Engineer',
    period: 'Nov/2023 - Present',
    description:
      'Developing features of a groundbreaking tool to aid bigger scale projects using Module Federation to visualize, deploy and monitor federated applications.',
    techs:
      'Nx,Node.js,Next.js,NestJS,Typescript,Javascript,PostgreSQL,Module Federation,Micro-frontends,Webpack,Rspack'.split(
        ','
      ),
  },
  {
    logoHeight: { base: '1.25rem', md: '1.5rem' },
    logoWidth: { base: '5.85rem', md: '7.02rem' },
    logoAlt: 'Vaullti',
    logoSrc: '/images/vaullti-dark.webp',
    href: 'https://www.linkedin.com/company/vaullti-inc/',
    jobTitle: 'Senior Software Engineer',
    period: 'Mar/2023 - Oct/2023',
    description:
      'Architecting and developing the first layers of the application as well as providing automated workflows for the whole infrastructure and code deployment.',
    techs:
      'Node.js,Serverless,Nx,Micro-services,ReactJS,Typescript,Javascript,DynamoDB,SQS,SNS,Route53,Cloudfront'.split(
        ','
      ),
  },
  {
    logoHeight: { base: '1rem', md: '1.25rem' },
    logoWidth: { base: '13rem', md: '16.25rem' },
    logoAlt: 'Groundbreaker',
    logoSrc: '/images/groundbreaker.webp',
    href: 'https://www.linkedin.com/company/groundbreakerco/',
    jobTitle: 'Senior Software Engineer',
    period: 'Dec/2021 - Jan/2023',
    description:
      "Developing new features as well as migrating legacy structures taking full advantage of our cloud provider's solutions. Assisting in decision making process and helping organize implementations.",
    techs:
      'Node.js,Serverless,Nx,Micro-services,Micro-frontends,Module Federation,ReactJS,Typescript,Javascript,DynamoDB'.split(
        ','
      ),
  },
  {
    logoHeight: { base: '1.15rem', md: '1.438rem' },
    logoWidth: { base: '9.694rem', md: '12.125rem' },
    logoAlt: 'Gazin Tech',
    logoSrc: '/images/gazin.webp',
    href: 'https://www.linkedin.com/company/gazin-tech/',
    jobTitle: 'Software Engineer',
    period: 'Sep/2020 - Nov/2021',
    description:
      'Participated in the development of the new e-commerce mobile app and improved the e-commerce web app. Took point in the development of an integrating micro-service to calculate shipping costs and notify updates.',
    techs:
      'Node.js,NestJS,Express.js,Clean Architecture,React.js,Typescript,Javascript,Next.js,PHP,Laravel,PostgreSQL'.split(
        ','
      ),
  },
  {
    logoHeight: { base: '1.5rem', md: '2rem' },
    logoWidth: { base: '6.375rem', md: '8.5rem' },
    logoAlt: 'Vivaworks',
    logoSrc: '/images/vivaworks.webp',
    href: 'https://www.linkedin.com/company/vivaworks/',
    jobTitle: 'Full-stack Developer',
    period: 'May/2019 - Sep/2020',
    description:
      'Developed new features and maintained the existing ones for the main product (corporative intranet) as well as started the new version of the mobile app using a multi-platform framework.',
    techs:
      'PHP,Zend Framework,Flutter,Docker,Bootstrap,Bitbucket,MySQL,Javascript,HTML,CSS,Apache'.split(
        ','
      ),
  },
];
