const resolvers = {
  Query: {

  },
  Mutation: {
    createUser: async (_, { name }, { driver }) => {
      const session = driver.session();
      try {
        const result = await session.run(
          'CREATE (u:User {name: $name}) RETURN u',
          { name }
        );

        const user = result.records[0].get(0).properties;
        return {
          id: user.id,
          name: user.name,
        };
      } finally {
        await session.close();
      }
    },

   
  },
};
export default resolvers;