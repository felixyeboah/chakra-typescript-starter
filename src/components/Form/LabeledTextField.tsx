import { forwardRef, PropsWithoutRef, ComponentPropsWithoutRef } from "react";
import { useFormContext } from "react-hook-form";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Flex, FormErrorMessage, Icon, Link as CLink } from "@chakra-ui/react";
import Link from "next/link";

export interface LabeledTextFieldProps
  extends ComponentPropsWithoutRef<typeof Input> {
  /** Field name. */
  name: string;
  /** Field label. */
  label: string;
  /** Field type. Doesn't include radio buttons and checkboxes */
  type?: "text" | "password" | "email" | "number" | "tel" | "file";
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements["div"]>;
  labelProps?: ComponentPropsWithoutRef<"label">;
}

export const LabeledTextField = forwardRef<
  HTMLInputElement,
  LabeledTextFieldProps
>(({ label, stat, outerProps, icon, labelProps, name, ...props }) => {
  const {
    register,
    formState: { isSubmitting, errors },
  } = useFormContext();
  const error = Array.isArray(errors[name])
    ? errors[name].join(", ")
    : errors[name]?.message || errors[name];

  return (
    <FormControl {...outerProps}>
      <Flex align="center" justify="space-between">
        <FormLabel fontSize="sm" color="gray.500" {...labelProps}>
          {label}
        </FormLabel>
        {stat === "login" && (
          <Link href="/forgot-password" passHref>
            <CLink
              _hover={{ textDecor: "none" }}
              _focus={{ outline: "none" }}
              color="gray.500"
              fontSize="sm"
              fontWeight="medium"
              textAlign="right"
              d="block"
              mt={-2}
            >
              Forgot your password?
            </CLink>
          </Link>
        )}
      </Flex>
      <InputGroup>
        <Input
          w="full"
          rounded="sm"
          _placeholder={{ fontSize: "sm" }}
          _focus={{ borderColor: "brand.500" }}
          disabled={isSubmitting}
          {...register(name)}
          {...props}
        />
        <InputRightElement>
          <Icon as={icon} color="brand.500" />
        </InputRightElement>
      </InputGroup>
      {error && (
        <FormErrorMessage fontSize="sm" role="alert" color="red.500">
          {error}
        </FormErrorMessage>
      )}
    </FormControl>
  );
});

export default LabeledTextField;
