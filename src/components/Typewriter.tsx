import { keyframes, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

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

type Typing = (text: string, i: number, fn: () => void) => void;

export const Typewriter = () => {
  const [content, setContent] = useState('');
  const [typing, setTyping] = useState(false);

  const animation = typing ? undefined : `${caret} 0.8s steps(1) infinite`;

  useEffect(() => {
    const erase: Typing = (text, i, fn) => {
      if (i > 0) {
        setContent(text.substring(0, i - 1));
        return setTimeout(() => erase(text, i - 1, fn), 30);
      }
      fn();
    };

    const write: Typing = (text, i, fn) => {
      if (i < text.length) {
        setContent(text.substring(0, i + 1));
        return setTimeout(() => write(text, i + 1, fn), 80);
      }
      setTyping(false);
      setTimeout(() => {
        setTyping(true);
        erase(text, i, fn);
      }, 1200);
    };

    const startTextAnimation = (i: number): void => {
      if (i === titles.length) {
        return startTextAnimation(0);
      }
      write(titles[i], 0, () => {
        setTyping(true);
        startTextAnimation(i + 1);
      });
    };
    startTextAnimation(0);
  }, []);

  return (
    <Text
      color="custom.main"
      height="1.5rem"
      lineHeight="1.5rem"
      fontSize="xl"
      animation={animation}
      borderRight="0.1em solid"
      whiteSpace="pre-wrap"
    >
      {content}
    </Text>
  );
};
