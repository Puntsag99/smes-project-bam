"use client";

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

import { ReactNode } from "react";
import { useAuth } from "@clerk/nextjs";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri:
    process.env.BACKEND_URL ||
    "https://smes-project-bam-px4y.vercel.app/api/graphql",
});

export const ApolloWrapper = ({ children }: { children: ReactNode }) => {
  const { getToken } = useAuth();

  const authLink = setContext(async (_, { headers }) => {
    // const clerkToken = await getToken();
    // console.log("token bna uu:", clerkToken);

    return {
      headers: {
        ...headers,
        // Authorization: `Bearer ${clerkToken}`,
      },
    };
  });
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
