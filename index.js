import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./src/types/defs.js";
import resolvers from "./src/resolvers/resolvers.js";
import neo4j from 'neo4j-driver'
(async () => {
  const URI = 'bolt://artymates-api-neo4j_yt-1:7687'
  const USER = 'neo4j'
  const PASSWORD = 'Mrc.212194'
  let driver

  try {
    driver = neo4j.driver(URI, neo4j.auth.basic(USER, PASSWORD))
    const serverInfo = await driver.getServerInfo();


    console.log('Connection established')
    console.log(serverInfo)

    /*
    const session = await driver.session()    
    const result = await session.run(
          'CREATE (u:User {name: $name}) RETURN u',
          { name: "mirac" }
        );    
        const singleRecord = result.records[0];
        const node = singleRecord.get(0);
    
        console.log(node.properties);
     */

  } catch (err) {
    console.log(`Connection error\n${err}\nCause: ${err.cause}`)
  }
})();



const server = new ApolloServer({ typeDefs, resolvers });
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);