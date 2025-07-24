import { typeDefs } from "@/schema";
import { resolvers } from "@/resolvers";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler(server);

export const config = {
  api: {
    bodyParser: false,
  },
};

export { handler as GET, handler as POST };
