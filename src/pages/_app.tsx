/* eslint-disable react/jsx-props-no-spreading */
import { Box, ChakraProvider, Flex, Text } from "@chakra-ui/react";
import { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { SessionProvider, signIn, useSession } from "next-auth/react";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
// eslint-disable-next-line import/order
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
// eslint-disable-next-line import/order
import Head from "next/head";
import "@fontsource/lexend/latin.css";

import { useEffect, useState } from "react";

import defaultSEOConfig from "../../next-seo.config";
import Layout from "components/layout";
import createEmotionCache from "styles/createEmotionCache";
import customTheme from "styles/customTheme";

import "styles/globals.css";
import { NextPageContext } from "next";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

type LayoutProps = {
  children: JSX.Element;
};

interface AuthProps extends NextPageContext {
  auth: boolean;
}

interface ComponentProps {
  Component: AuthProps;
}

function Auth({ children }: LayoutProps) {
  const { data: session, status } = useSession();
  // const isUser = !!session?.user;
  const isUser = true;
  useEffect(() => {
    if (status === "loading") return; // Do nothing while loading
    if (!isUser) signIn(); // If not authenticated, force log in
  }, [isUser, status]);

  if (isUser) {
    return children;
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return (
    <Flex align="center" justify="center" minH="100vh" w="100%">
      <Box>
        <Text>Loading</Text>
      </Box>
    </Flex>
  );
}

const MyApp = ({
  Component,
  pageProps: { session, dehydratedState, ...pageProps },
  emotionCache = clientSideEmotionCache,
}: MyAppProps & ComponentProps) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <CacheProvider value={emotionCache}>
      <ChakraProvider theme={customTheme}>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
          />
        </Head>
        <DefaultSeo {...defaultSEOConfig} />
        <SessionProvider session={session}>
          {Component.auth ? (
            <Auth>
              <QueryClientProvider client={queryClient}>
                <Hydrate state={dehydratedState}>
                  <Layout>
                    <Component {...pageProps} />
                  </Layout>
                </Hydrate>
              </QueryClientProvider>
            </Auth>
          ) : (
            <Component {...pageProps} />
          )}
        </SessionProvider>
      </ChakraProvider>
    </CacheProvider>
  );
};

MyApp.defaultProps = {
  emotionCache: clientSideEmotionCache,
};

export default MyApp;
