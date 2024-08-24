"use server";

import { HttpLink } from "@apollo/client";
import { 
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";


const { getClient: graphClient } = registerApolloClient(() => {
  const httpLink = new HttpLink({
    uri: process.env.CONTENT_API_URL,
  });

  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
});

export {
  graphClient
}