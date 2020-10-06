import express from 'express';
const { graphqlHTTP } = require('express-graphql');
import schema from './schema';

const app = express();

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