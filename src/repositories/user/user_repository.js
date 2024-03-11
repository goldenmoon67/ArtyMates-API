import db from '../../mock_db/db.js'

export const getUsers = async () => {
    return db.users;
};
export const getUserByName = async (name) => {
    return db.users.find((user) => user.name == name);
};

export const addUser = async (user) => {
    return db.users.push(user)
};
