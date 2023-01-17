import { Box } from '@chakra-ui/react';

type WhatIDoProps = { opacity?: number };

export const WhatIDo = ({ opacity = 1 }: WhatIDoProps) => (
  <Box
    as={opacity === 1 ? 'h2' : 'div'}
    aria-hidden={opacity === 1 ? false : true}
    color="custom.main"
    opacity={opacity}
    fontSize="4rem"
    lineHeight="4.75rem"
  >
    What I do
  </Box>
);
