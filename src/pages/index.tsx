import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import LabeledTextField from "../components/Form/LabeledTextField";
import Form, { FORM_ERROR } from "../components/Form/Form";
import { Login } from "../utils/validations";
import { MdAlternateEmail } from "react-icons/md";
import { BiLockAlt } from "react-icons/bi";

const Home = () => {
  return (
    <Flex align="center" justify="center" minH="100vh" w="100%">
      <Box
        bg="white"
        rounded="md"
        p={{ base: 4, md: 6 }}
        w={{ md: 85 }}
        filter="drop-shadow(0px 2px 20px rgba(0,0,0,0.1))"
      >
        <Stack spacing="2rem">
          <Heading
            as="h5"
            fontSize={{ base: "lg", md: "xl" }}
            textAlign="center"
          >
            Welcome back
          </Heading>

          <Stack>
            <Form
              submitText="Login"
              schema={Login}
              initialValues={{ email: "", password: "" }}
              onSubmit={async (values) => {
                try {
                  console.log(values);
                  // const user = await loginMutation(values);
                  // props.onSuccess?.(user);
                } catch (error: unknown) {
                  if (error) {
                    return {
                      [FORM_ERROR]: "Sorry, those credentials are invalid",
                    };
                  } else {
                    return {
                      [FORM_ERROR]:
                        "Sorry, we had an unexpected error. Please try again. - " +
                        error.toString(),
                    };
                  }
                }
              }}
            >
              <LabeledTextField
                name="email"
                label="Email"
                placeholder="Email"
                icon={MdAlternateEmail}
              />
              <LabeledTextField
                name="password"
                label="Password"
                placeholder="Password"
                type="password"
                stat="login"
                icon={BiLockAlt}
              />
            </Form>
          </Stack>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Home;
