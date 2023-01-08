import { Text } from '@chakra-ui/react';

type WhatIDoProps = { opacity?: number };

export const WhatIDo = ({ opacity = 1 }: WhatIDoProps) => (
  <Text
    color="custom.main"
    opacity={opacity}
    fontSize="4rem"
    lineHeight="4.75rem"
  >
    What I do
  </Text>
);
