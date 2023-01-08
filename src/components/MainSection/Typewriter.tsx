import { keyframes, Text } from '@chakra-ui/react';
import { useTypewriter } from './useTypewriter';

const titles = [
  'Back-end Developer',
  'Front-end Developer',
  'Mobile App Experienced',
  'SRE Aspirant',
];

const caret = keyframes`
  50% {
    border-color: transparent;
  }
`;

export const Typewriter = () => {
  const { typing, content } = useTypewriter(titles);
  const animation = typing ? undefined : `${caret} 0.8s steps(1) infinite`;

  return (
    <Text
      color="custom.main"
      height="1.5rem"
      lineHeight="1.5rem"
      fontSize={{ base: 'md', md: 'xl' }}
      animation={animation}
      borderRight="0.1em solid"
      whiteSpace="pre-wrap"
    >
      {content}
    </Text>
  );
};
