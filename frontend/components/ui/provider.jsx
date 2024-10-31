'use client'

import { ChakraProvider } from '@chakra-ui/react';
import theme from 'utils/theme'

export function Provider(props) {
  return (
    <ChakraProvider value={theme}>
      {props.children}
    </ChakraProvider>
  )
}
