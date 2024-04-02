import 'dotenv/config'
import neo4j from 'neo4j-driver';

const URI = process.env.NEO4J_URI;
const USER = process.env.NEO4J_USER;
const PASSWORD = process.env.NEO4J_PASSWORD;

const driver = neo4j.driver(URI, neo4j.auth.basic(USER, PASSWORD));

const checkDBconnection = async () => {
  try {
    const serverInfo = await driver.getServerInfo();
    console.log('🛢️ Connection established to Neo4j', serverInfo);
  } catch (error) {
    console.error('Error connecting to Neo4j', error.message);
    throw error;
  }
};

export { driver, checkDBconnection };