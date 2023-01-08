import { SkillCardProps } from './SkillCard';

export const upperGradient =
  'linear-gradient(180deg, rgba(249, 249, 249, 0.04) 0.06%, rgba(249, 249, 249, 0) 135%)';
export const lowerGradient =
  'linear-gradient(180deg, rgba(249, 249, 249, 0.0116) 0.87%, rgba(249, 249, 249, 0) 80%)';
export const mobileGradient =
  'linear-gradient(180deg, rgba(249, 249, 249, 0.04) 0.06%, rgba(249, 249, 249, 0) 100%);';
export const cardsProps: SkillCardProps[] = [
  {
    title: 'Back-end',
    description:
      'Experience with serverless, micro-services, monolithics, SQL and NoSQL, event-driven, clean architecture, etc.',
    background: { base: mobileGradient, lg: upperGradient },
  },
  {
    title: 'Mobile Apps',
    description:
      'Working with Flutter and React Native gave me a deep perspective on mobile app development.',
    background: { base: mobileGradient, lg: upperGradient },
  },
  {
    title: 'Front-end',
    description:
      'Going from raw CSS to pre-built styling libraries, from SPA to SSR, my toolkit is wide.',
    background: { base: mobileGradient, lg: lowerGradient },
  },
  {
    title: 'SRE',
    description:
      'Increasing knowledge of cloud providers and infrastructure to architect better solutions.',
    background: { base: mobileGradient, lg: lowerGradient },
  },
];
