import React from "react";
import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";

interface IButton extends ButtonProps {
  title: string;
}

export const Button = ({ title, ...rest }: IButton) => {
  return (
    <ChakraButton
      colorScheme="primaryColorScheme"
      rounded="3px"
      px={{ base: 6, md: 10 }}
      h={12}
      boxShadow="0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0)"
      transition="all 200ms ease"
      {...rest}
    >
      {title}
    </ChakraButton>
  );
};

export const EditButton = ({ title, ...rest }: IButton) => {
  return (
    <ChakraButton
      colorScheme="dangerColorScheme"
      rounded="3px"
      px={{ md: 10 }}
      h={12}
      boxShadow="0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0)"
      transition="all 200ms ease"
      {...rest}
    >
      {title}
    </ChakraButton>
  );
};
