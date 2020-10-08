import { tasks } from "./sample";

import User from "./models/User";
import Car from "./models/Car";

export const resolvers = {
    Query: {
        hello: () => {
            return 'Hello world with graphql'
        },
        greet(root, { name }) {
            return `Hello ${name}`;
        },
        tasks() {
            return tasks;
        },
        async Users() {
            return await User.find();
        },
        async Cars() {
            return await Car.find();
        }
    },
    Mutation: {
        createTask(_, { input }) {
            input._id = tasks.length;
            tasks.push(input);
            return input;
        },
        async createUser(_, { input }) {
            const newUser = new User(input);
            await newUser.save();
            return newUser;
        },
        async deleteUser(_, { _id }) {
            return await User.findByIdAndDelete(_id);
        },
        async updateUser(_, { _id, input }) {
            return await User.findByIdAndUpdate(_id, input, { new: true });
        },
        async createCar(_, { input }) {
            const newCar = new Car(input);
            await newCar.save();
            return newCar;
        }
    }
};