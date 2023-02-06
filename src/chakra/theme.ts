// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
  },
  fonts: {
    body: "Open Sans, sans-serif"
  },
  styles: {
    global: () => ({
      body: {
        bg: 'gray.300'
      }
    })
  },
  //every components that's will be apply to all comment from chakra-ui
  components:{
    // Button
  }
})