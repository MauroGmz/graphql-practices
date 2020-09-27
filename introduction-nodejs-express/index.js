const express = require('express');
const app = express();

// const { express_graphql } = require('express-graphql').graphqlHTTP

const express_graphql = require('express-graphql').graphqlHTTP
const { buildSchema } = require('graphql'); // functionality to write schemas

const schema = buildSchema(`
    type Query {
        message: String
    }
`);

const root = {
    message: () => "hello world!"
}

app.use('/graphql', express_graphql({
    schema: schema,
    root: root,
    graphiql: true
}));

app.listen(3000, () => console.log('server on port 3000'));