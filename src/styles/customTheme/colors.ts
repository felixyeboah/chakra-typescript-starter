import { DeepPartial, Theme } from "@chakra-ui/react";

/** extend additional color here */
const extendedColors: DeepPartial<
  Record<string, Theme["colors"]["blackAlpha"]>
> = {
  brand: {
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
  primaryColorScheme: {
    500: "#0072e6",
    600: "#0059b4",
  },
  dangerColorScheme: {
    500: "#bb2a2f",
    600: "#922024",
  },
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme["colors"]> = {};

const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};

export default colors;
