import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./src/neo4j/graphql-defs/type-defs.js";
import { Neo4jGraphQL } from "@neo4j/graphql";
import { driver, checkDBconnection } from "./src/neo4j/db-helper.js";
import resolvers from "./src/neo4j/graphql-defs/resolvers/resolvers.js";



await checkDBconnection();



const neoSchema = new Neo4jGraphQL({ typeDefs, driver });

const server = new ApolloServer({
  schema: await neoSchema.getSchema(), 
});

const { url } = await startStandaloneServer(server, {
  context: async ({ req }) => ({ req }),
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at ${url}`);