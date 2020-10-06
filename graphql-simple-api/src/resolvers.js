import { tasks } from "./sample";

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
        }
    }
};