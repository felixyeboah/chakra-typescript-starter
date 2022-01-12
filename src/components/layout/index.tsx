import {
  Box,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { ReactNode } from "react";
import { FiUsers } from "react-icons/fi";
import { HiOutlineLogout } from "react-icons/hi";
import {
  MdOutlineReviews,
  MdOutlineWorkOutline,
  MdOutlineSpaceDashboard,
} from "react-icons/md";

import ActiveLink from "../../libs/ActiveLink";

type LayoutProps = {
  children: ReactNode;
};

const menus = [
  {
    id: 1,
    name: "Dashboard",
    icon: MdOutlineSpaceDashboard,
    path: "/dashboard",
  },
  { id: 1, name: "Artisans", icon: MdOutlineWorkOutline, path: "/artisans" },
  { id: 3, name: "Customers", icon: FiUsers, path: "/customers" },
  { id: 4, name: "Reviews", icon: MdOutlineReviews, path: "/reviews" },
];

const Layout = ({ children }: LayoutProps) => {
  return (
    <Grid templateColumns={{ md: "15% 85%" }} gap={{ md: 10 }} minH="100vh">
      <GridItem>
        <Box bg="brand.600" minH="100vh" w="100%" px={{ md: 6 }} py={{ md: 6 }}>
          <HStack
            flexDirection="column"
            justify="space-between"
            minH="90vh"
            align="start"
            color="gray.100"
            fontSize="lg"
          >
            <Stack spacing="3rem">
              <Heading as="h5" color="gray.50" fontSize={{ md: "3xl" }}>
                Sharp Admin
              </Heading>

              <Stack>
                {menus.map((menu) => (
                  <ActiveLink
                    key={menu.id}
                    href={menu.path}
                    activeClassName="active-class"
                  >
                    <Link
                      as="a"
                      _hover={{ textDecor: "none", bg: "brand.400" }}
                      d="flex"
                      alignItems="center"
                      p={3}
                      rounded="md"
                      _focus={{ outline: "none", borderShadow: "none" }}
                    >
                      <Icon as={menu.icon} mr={2} /> {menu.name}
                    </Link>
                  </ActiveLink>
                ))}
              </Stack>
            </Stack>

            <HStack>
              <Icon as={HiOutlineLogout} />
              <Text>Logout</Text>
            </HStack>
          </HStack>
        </Box>
      </GridItem>
      <GridItem>
        <Box as="main" marginY={22}>
          {children}
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Layout;
