import User from './models/User';

export const resolvers = {

    Query: {
        getUsers: async () => {
            return await User.find();
        }
    }

}