import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import App from "./App";


const colors = {
  brand: {
    100: '#a3c1ad',
    200: '#a0d6b4',
    300: '#5f9ea0',
    400: '#317873',
    500: '#49796b',
  },
}


const theme = extendTheme({ colors })

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
