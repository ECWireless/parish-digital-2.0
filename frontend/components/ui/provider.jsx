'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { ColorModeProvider } from './color-mode'
import { ThemeProvider } from "next-themes"
import theme from 'utils/theme'

export function Provider(props) {
  return (
    <ChakraProvider value={theme}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <ColorModeProvider>{props.children}</ColorModeProvider>
      </ThemeProvider>
    </ChakraProvider>
  )
}
