import express from 'express';
const { graphqlHTTP } = require('express-graphql');
import schema from './schema';

import { connect } from './database';

const app = express();
connect();

app.get('/', (req, res) => {
    res.json({
        message: "Hello World"
    })
});

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}));

app.listen(3000, () => console.log('Server on port 3000'));