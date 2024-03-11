import { getUsers, getUserByName, addUser } from '../repositories/user/user_repository.js'
const resolvers = {
  Query: {
    getAllUsers: () => getUsers(),
    getUserByName: (_, { name }) => getUserByName(name),
  },
  Mutation: {
    createUser: async (_, { user  }) => {
      const users=await getUsers();
      const id=users.length+1;
      const newUser = {
        id:id,
        name: user.name,
        age: user.age,
        male: user.male,
      };
      addUser(newUser);
      return newUser;
    },
   
  },
};
export default resolvers;