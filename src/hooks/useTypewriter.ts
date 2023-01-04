import { useEffect, useState } from 'react';

type Typing = (text: string, i: number, fn: () => void) => void;

export const useTypewriter = (words: string[]) => {
  const [content, setContent] = useState('');
  const [typing, setTyping] = useState(false);

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
      if (i === words.length) {
        return startTextAnimation(0);
      }
      write(words[i], 0, () => {
        setTyping(true);
        startTextAnimation(i + 1);
      });
    };
    startTextAnimation(0);
  }, []);

  return { typing, content };
};
