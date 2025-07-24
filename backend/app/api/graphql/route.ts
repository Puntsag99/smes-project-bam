import { typeDefs } from "@/schema";
import { resolvers } from "@/resolvers";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler(server);

export const dynamic = "force-dynamic";

export { handler as GET, handler as POST };
