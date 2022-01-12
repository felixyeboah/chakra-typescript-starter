import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

const breakpoints = createBreakpoints({
  sm: "40rem", // 640px
  md: "48em", // 768
  lg: "62em", // 992
  xl: "80em", // 1280
  "2xl": "85.375em", // 1366
  "3xl": "90em", // 1440
  "4xl": "96em", // 1536
  "5xl": "108rem", // 1728
  "6xl": "120em", // 1920
})

export const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        fontSize: "md",
        fontFamily: '"Poppins", sans-serif',
        lineHeight: "tall",
        fontWeight: 400,
        bg: "white",
        color: "#121212",
      },
    }),
  },
  breakpoints,
  fonts: {
    heading: '"Poppins" ,sans-serif',
    body: '"Poppins", sans-serif',
  },
  fontSizes: {
    xx: ".55rem",
    tiny: ".68rem",
    "7xl": "5rem",
    "8xl": "6rem",
  },
  colors: {
    primary: {
      50: "#dcf3ff",
      100: "#aedaff",
      200: "#7dbfff",
      300: "#4aa5ff",
      400: "#1a8cff",
      500: "#0072e6",
      600: "#0059b4",
      700: "#003f82",
      800: "#002651",
      900: "#000e21",
    },
    text: "#121212",
    active: "#d25778",
    primaryColorScheme: {
      500: "#0072e6",
      600: "#0059b4",
    },
    dangerColorScheme: {
      500: "#bb2a2f",
      600: "#922024",
    },
    black: {
      500: "#121212",
      600: "#121212",
    },
  },
  space: {
    14: "3.5rem",
    60: "15rem",
    66: "17.5rem",
    70: "18rem",
    75: "19rem",
    80: "20rem",
    82: "21.5rem",
    85: "23rem",
    87: "24rem",
    90: "25rem",
    95: "26rem",
    108: "27rem",
    109: "28rem",
    109.5: "29rem",
    110: "30rem",
    112: "31rem",
    115: "32rem",
    117: "33rem",
    120: "35rem",
    121: "36rem",
    122: "37rem",
    122.5: "39rem",
    123: "40rem",
    125: "45rem",
    127: "48rem",
    128: "50rem",
    130: "55rem",
    135: "60rem",
    137: "65rem",
    140: "70rem",
    143: "72rem",
    145: "76rem",
    150: "80rem",
  },
  sizes: {
    14: "3.5rem",
    60: "15rem",
    66: "17.5rem",
    70: "18rem",
    75: "19rem",
    80: "20rem",
    82: "21rem",
    85: "23rem",
    87: "24rem",
    90: "25rem",
    95: "26rem",
    108: "27rem",
    109: "28rem",
    109.5: "29rem",
    110: "30rem",
    112: "31rem",
    115: "32rem",
    117: "33rem",
    120: "35rem",
    121: "36rem",
    122: "37rem",
    122.5: "39rem",
    123: "40rem",
    125: "45rem",
    127: "48rem",
    128: "50rem",
    130: "55rem",
    135: "60rem",
    137: "65rem",
    140: "70rem",
    143: "72rem",
    145: "76rem",
    150: "80rem",
  },
})
