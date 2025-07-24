export const dynamic = "force-dynamic";

import { typeDefs } from "@/schema";
import { resolvers } from "@/resolvers";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

const server = new ApolloServer({
  resolvers,
  typeDefs,
  introspection: true,
});

const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };
